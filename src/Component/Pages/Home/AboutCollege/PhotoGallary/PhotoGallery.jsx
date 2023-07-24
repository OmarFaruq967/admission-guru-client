
import PhotoAlbum from "react-photo-album";
import photos1 from "../../../../../../public/images/graduate-img/01.jpg";
import photos2 from "../../../../../../public/images/graduate-img/02.jpg";
import photos3 from "../../../../../../public/images/graduate-img/03.jpg";
import photos4 from "../../../../../../public/images/graduate-img/04.jpg";
import photos5 from "../../../../../../public/images/graduate-img/05.jpg";
import photos6 from "../../../../../../public/images/graduate-img/06.jpg";
import photos7 from "../../../../../../public/images/graduate-img/07.jpg";
import photos8 from "../../../../../../public/images/graduate-img/08.jpg";
import photos9 from "../../../../../../public/images/graduate-img/09.jpg";
import photos10 from "../../../../../../public/images/graduate-img/10.jpg";

const photos = [
  {
    src: photos1,
    width: 380,
    height: 400,
  },
  {
    src: photos2,
    width: 400,
    height: 400,
  },
  {
    src: photos3,
    width: 400,
    height: 400,
  },
  {
    src: photos4,
    width: 380,
    height: 400,
  },
  {
    src: photos5,
    width: 400,
    height: 400,
  },
  {
    src: photos6,
    width: 400,
    height: 400,
  },
  {
    src: photos7,
    width: 400,
    height: 400,
  },
  {
    src: photos8,
    width: 400,
    height: 400,
  },
  {
    src: photos9,
    width: 400,
    height: 400,
  },
  {
    src: photos10,
    width: 400,
    height: 400,
  },
 
  
  
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}
