const Footer = () => {
  const date = new Date();
  console.log(date.getFullYear);
  return <p> Iqwhales @ {date.getFullYear()}</p>;
};
export default Footer;
