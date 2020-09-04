import { makeStyles } from '@material-ui/core/styles';

export const checkboxStyle = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 1,
    width: 12,
    height: 12,
    border: '1px solid #86A2B3',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    borderRadius: 1,
    backgroundColor: '#61C051',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 12,
      height: 12,
      boxSizing: 'border-box',
      border: '1px solid #86A2B3',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#61C051',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(207,219,226)',
    },
  },
});

export const sidebarStyle = makeStyles({
  sidebarWrapper: {
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '100%',
  },
});

export const navigationStyle = makeStyles({
  appbar: {
    backgroundColor: '#F2F5F7',
    borderBottom: ' 2px solid #DBE4E9',
    padding: '0px 16px',
  },
});

export const buttonStyle = makeStyles({
  button: {
    backgroundColor: '#F2F5F7',
    borderRadius: 4,
    color: '#0B4566',
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: 2,
    minWidth: 46,
    padding: 0,
    boxSizing: 'border-box',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#00A4EC',
      color: '#fff',
    },
  },
  active: { backgroundColor: '#00A4EC', color: '#fff' },
});

export const iconStyle = makeStyles({
  icon: {
    backgroundColor: '#fff',
    height: 22,
  },
  activeIcon: {
    backgroundColor: '#0b4566',
    '& path': {
      fill: '#fff',
    },
  },
});

export const titleStyle = makeStyles({
  container: {
    padding: 16,
  },
  titleMain: {
    color: '#0b4566',
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 1.1,
    fontWeight: 500,
    padding: 0,
    margin: 0,
  },
  subTitle: {
    color: 'rgb(134, 162, 179)',
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
});

export const linkStyle = makeStyles({
  link: {
    color: '#00A4EC',
    fontWeight: 700,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  close: {
    color: '#FD3F75',
  },
});

export const productIconStyle = makeStyles({
  button: {
    width: '25%',
    height: 34,
    borderRight: '1px solid #dbe4e9',
    display: 'inline-block',
    boxSizing: 'border-box',
    padding: '10px 0px',
    cursor: 'pointer',
    '& hover': {
      backgroundColor: '#0b4566',
    },
    '& svg ': {
      stroke: '#0b4566',
    },
  },
  buttonSelected: {
    backgroundColor: '#0b4566',
    '& p': {
      color: '#fff',
    },
    '& svg ': {
      stroke: '#fff',
    },
  },
  title: {
    fontSize: 10,
    textAlign: 'center',
    color: '#86a2b3',
  },
});
