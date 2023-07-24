
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
    src: "../../../../../../public/images/graduate-img/01.jpg",
    width: 380,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/02.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/03.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/04.jpg",
    width: 380,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/05.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/06.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/07.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/08.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/09.jpg",
    width: 400,
    height: 400,
  },
  {
    src: "../../../../../../public/images/graduate-img/10.jpg",
    width: 400,
    height: 400,
  },
 
  
  
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}
