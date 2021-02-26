import {
    Box,
    Button,
    Chip,
    Container,
    makeStyles,
    TextField,
    Typography,
  } from '@material-ui/core'
  import Autocomplete from '@material-ui/lab/Autocomplete'
  
  import React from 'react'
  
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
  
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }
  
  function Languages() {
    const classes = useStyle()
    return (
      <Container style={{ marginTop: '20px', overflow: 'auto' }}>
        <Typography style={{ fontWeight: 'bold' }}>Languages</Typography>
        <Autocomplete
          classes={{
            popupIndicator: classes.popupIndicator,
            input: classes.input,
          }}
          multiple
          disableClearable
          id="tags-outlined"
          options={languages}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          style={{ background: 'red' }}
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
              placeholder="Enter a language"
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
          Clear Languages
        </Button>
      </Container>
    )
  }
  
  export default Languages
  
  // Use below function to filter https://stackoverflow.com/a/44313087/711609
  // @ts-ignore
  // function filterByValue(string:string) {
    // return languages.filter((o) =>
      // Object.keys(o).some((k) =>
      // @ts-ignore
        // o[k].toLowerCase().includes(string.toLowerCase()),
      // ),
    // )
  // }

const languages = [
  { id:"af", nativeName:"Afrikaans", name:"Afrikaans" },
  { id:"bn", nativeName:"বাংলা",     name:"Bengali" },
  { id:"ca", nativeName:"Català",   name:"Catalan" },
  { id:"cs", nativeName:"Čeština",  name:"Czech" },
  { id:"da", nativeName:"Dansk",    name:"Danish" },
  { id:"de", nativeName:"Deutsch",  name:"German" },
  { id:"el", nativeName:"ελληνικά", name:"Greek" },
  { id:"en", nativeName:"English",  name:"English" },
  { id:"es", nativeName:"Español",  name:"Spanish" },
  { id:"fi", nativeName:"Suomi",    name:"Finnish" },
  { id:"fil",nativeName:"Filipino", name:"Filipino" },
  { id:"fr", nativeName:"Français", name:"French" },
  { id:"hi", nativeName:"हिन्दी",      name:"Hindi" },
  { id:"hu", nativeName:"Magyar",   name:"Hungarian" },
  { id:"id", nativeName:"Bahasa Indonesia", name:"Indonesian" },
  { id:"it", nativeName:"Italiano", name:"Italian" },
  { id:"ja", nativeName:"日本語",    name:"Japanese" },
  { id:"ko", nativeName:"한국어",     name:"Korean" },
  { id:"ms", nativeName:"Bahasa Malaysia", name:"Malay" },
  { id:"nb", nativeName:"Norsk-Bokmål", name:"Norwegian" },
  { id:"nl", nativeName:"Nederlands", name:"Dutch" },
  { id:"pl", nativeName:"Polski",    name:"Polish" },
  { id:"pt", nativeName:"Português", name:"Portuguese" },
  { id:"ro", nativeName:"Română",    name:"Romanian" },
  { id:"ru", nativeName:"Русский",   name:"Russian" },
  { id:"sl", nativeName:"Slovenščina", name:"Slovenian" },
  { id:"sq", nativeName:"Shqip",     name:"Albanian" },
  { id:"sv", nativeName:"Svenska",   name:"Swedish" },
  { id:"sw", nativeName:"Kiswahili", name:"Swahili" },
  { id:"th", nativeName:"ภาษาไทย",   name:"Thai" },
  { id:"tr", nativeName:"Türkçe",    name:"Turkish" },
  { id:"uk", nativeName:"Українська", name:"Ukranian" },
  { id:"vi", nativeName:"Tiếng Việt", name:"Vietnamese" },
  { id:"zh", nativeName:"中文(简体)",  name:"Chinese" }
]
