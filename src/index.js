import { displayBottom, displayTop } from "./functions/dom";
import { latLon } from "./functions/getData";

import clouds from "./images/clouds.png";

import "./normalize.css";
import "./style.css";

displayTop(latLon("nashville"));
displayBottom(latLon("nashville"));
