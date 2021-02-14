import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete'
import ListSubheader from '@material-ui/core/ListSubheader';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { skillsAll } from './skillsAll'
import { VariableSizeList as List, ListChildComponentProps } from 'react-window';

const useStyle = makeStyles({
  popupIndicator: {
    display: 'none',
  },
  root: {
    borderRadius: 0,
  },
  input: {
    width: 'auto !important',
  },
})

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<List>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  // const theme = useTheme();
  // const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = 48;

  const getChildSize = (child: React.ReactNode) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <List
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </List>
      </OuterElementContext.Provider>
    </div>
  );
});

function random(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const useStyles = makeStyles({
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

const OPTIONS = Array.from(new Array(10000))
  .map(() => random(10 + Math.ceil(Math.random() * 20)))
  .sort((a: string, b: string) => a.toUpperCase().localeCompare(b.toUpperCase()));

const renderGroup = (params: AutocompleteRenderGroupParams) => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children,
];




/**
 * Main Function
 */
function Skills() {
  const [value, setValue] = useState<ISkills[] | []>([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = (value: ISkills[]) => {
    // setValue(value.map(a=>a.id))   // keep it for api call later
    setValue(value)
  }

  const handleDelete = () => {
    setValue([])
    setInputValue('')
  }

  useEffect(() => {
    console.log(value);
  }, [value])

  const classes = useStyle()
  return (
    <Container style={{ marginTop: '20px', overflow: 'auto' }}>
      <Typography style={{ fontWeight: 'bold' }}>Skills</Typography>
      <Autocomplete
        classes={{
          popupIndicator: classes.popupIndicator,
          input: classes.input,
        }}
        multiple
        disableClearable
        id="tags-outlined"
        options={skillsAll}
        value={value}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        onChange={(_event, value1) => handleChange(value1)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => { setInputValue(newInputValue) }}
        // @ts-ignore
        ListboxComponent={ListboxComponent}
        ChipProps={{
          size: 'small',
          variant: 'outlined',
          classes: {
            root: classes.root,
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Enter a skill"
            style={{ background: 'white' }}
          />
        )}
      />
      <Box m={2}></Box>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="primary"
        style={{ textTransform: 'none', fontWeight: 'bold' }}
      >
        Clear Skills
      </Button>
    </Container>
  )
}

export default Skills

interface ISkills {
  name: string
  id: number
}
