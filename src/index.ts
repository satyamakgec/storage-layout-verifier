import { BuildArtifacts } from "./BuildArtifacts";
import path from 'path';

let pathArray: string[] = [];

if ( (process.argv).length < 4) {
    console.log("Please enter logic contract & proxy contract path respectively");
} else {
    pathArray.push(process.argv[2]);
    pathArray.push(process.argv[3]);
}
console.log(pathArray);
let obj = new BuildArtifacts(pathArray);

(obj.listSourcePaths()).forEach(element => {
    console.log(obj.getArtifactsFromSourcePath(element));
});