import { Box, Button, Container, makeStyles, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete'
import ListSubheader from '@material-ui/core/ListSubheader';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { skillsAll } from './skillsAll'
import { VariableSizeList, ListChildComponentProps } from 'react-window';

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
  listbox: {
    boxSizing: 'border-box',
  },
})


/**
 * REACT-WINDOW STUFF
 */
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
  const ref = React.useRef<VariableSizeList>(null);
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
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  // const itemSize = smUp ? 36 : 48;

  // const getChildSize = (child: React.ReactNode ) => {
  const getChildSize = (child: any ) => {
    let text= child!.props.children
    console.log(text)
    let splitted = text.split(' ')
    let rowCount = countRows(splitted)
    console.log(rowCount+"RowCount!!!!!")

    if (getTextWidth(text) > 122.80) {
      return 36+(24 * rowCount)
    }

    return 36;
  };

  function getTextWidth(text: string):number {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context!.font = getComputedStyle(document.body).font;
    console.log(context?.measureText(text).width)
    return context!.measureText(text).width;
  }
  
  function countRows (text: string[]) {
    const space = 3.465820312
    let rows = 0
    let remaining = 0 
    text.map((a:string, i:number, arr:string[]) => {
        if (i>0) {
            if ((getTextWidth(arr[i]) + remaining) > 55) {
                rows++
                remaining = getTextWidth(arr[i]) + space
              } else {
                remaining += getTextWidth(arr[i]) + space
            }
        }  else {
            remaining = a.length + 1
        }
    }
    )
    if (text.length > 4) {
      return rows - 2
    }
    if (text.length > 3){
      return rows - 1
    }
    return rows
}

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * 36;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
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
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});


const renderGroup = (params: AutocompleteRenderGroupParams) => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children,
];
/**
 * REACT-WINDOW STUFF ENDS
 */




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
          listbox: classes.listbox,
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
        onInputChange={(_event, newInputValue) => { setInputValue(newInputValue) }}
        renderGroup={renderGroup}
        ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
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
        color="secondary"
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
