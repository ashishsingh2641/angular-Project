// register components here with path
import Banner  from './Components/Banner/Banner';
import CatalogDetails from './Components/CatalogDetails/CatalogDetails';
import PhoneList from './Components/PhoneList/PhoneList';
import stickyHeader from './Components/stickyHeader/stickyHeader';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import TextAndImage from './Components/TextAndImageComponent/TextAndImage';
import TileBanner from './Components/TileBanner/TileBanner';
import FormComponent from './Components/FormComponent/FormComponent';
import  PhoneSelectComponent from './Components/PhoneSelectComponent/PhoneSelectComponent';
import ComponentDescription from './Components/ComponentDescription/ComponentDescription';
import ToutComponent from './Components/ToutComponent/ToutComponent';
import OverLayImage from './Components/OverLayWithImage/OverLayImage';

//Component registery in component list

const componentClasses = { 
					Banner,
					CatalogDetails,
					PhoneList,
					stickyHeader,
					FooterComponent,
					TextAndImage,
					TileBanner,
					FormComponent,
					PhoneSelectComponent,
					ComponentDescription,
					ToutComponent,
					OverLayImage
				};

export default componentClasses;