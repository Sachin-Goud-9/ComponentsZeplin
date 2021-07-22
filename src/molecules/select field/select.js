import { ThemeProvider } from "@material-ui/core";
import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import chroma from 'chroma-js'
import { makeStyles } from "@material-ui/core";

import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const animatedComponents = makeAnimated();

const options = [
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Chennai", label: "Chennai" },
  { value: "Delhi", label: "Delhi" },
];

const buttonStyle = {
  control: styles => ({ backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'green',
    },
  }),
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '500px',
    height:'60px',
    display : 'flex',
    flexDirection : 'row',
    border : '1.5px solid #5ac568',
    borderRadius : '10px',
    backgroundColor : 'white',

    '& .css-lrhbuit-multiValue': {
      backgroundColor : 'red'
    },
    ValueContainer : {
     
        '& .css-lrhbuit-multiValue': {
          backgroundColor : 'red'
        }
      
     
    }

  }),
  // multiValue: (styles, { data }) => {
  //   const color = chroma(data.color);
  //   return {
  //     backgroundColor: 'red'//color.alpha(0.1).css(),
  //   };
  // },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}




export default function AnimatedMulti(args) {

  // const selectItem = 

  const useStyles = makeStyles((theme) => ({
      '.multiValue' : {
        backgroundColor : 'green'
      }
    //}
     
  
  }));

  const listItemTheme = createTheme({
    overrides : {
      'multiValue' : {
        backgroundColor : 'red'
      }
    }
});

const responsiveListItemTheme = responsiveFontSizes(listItemTheme);

 const classes = useStyles();


  return (
    <ThemeProvider theme={responsiveListItemTheme}>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        placeholder="Enter Job Location"
        styles={customStyles}
      />
    </ThemeProvider>
  );
}


/*


.css-12jo7m5 {
	border-radius: 2px;
	color: hsl(0, 0%, 20%);
	font-size: 85%;
	overflow: hidden;
	padding: 8px 10px;
	padding-left: 6px;
	text-overflow: clip;
	white-space: nowrap;
	box-sizing: border-box;
	background-color: white;
	border: 1px solid #5ac568;
	border-radius: 5px;
	width: 135px;
	height: 40px;
	padding-right: 20px;
}

*/