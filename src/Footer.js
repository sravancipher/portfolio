import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer(){
    return(
        <>
          <span className='w-100 d-block m-auto text-center'><CopyrightIcon/> {new Date().getFullYear()} Designed By SravanKumar Potnuru</span>
        </>
    )
}
export default Footer;