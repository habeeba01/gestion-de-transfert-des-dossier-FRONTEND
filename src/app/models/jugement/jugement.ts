import { Algharama } from "../algharama/algharama";
import { DestcriptionoJugementdescription } from "../destcriptiono-jugementdescription";
import { Forcat } from "../forcat/forcat";

export class Jugement {
    id!:number;
    numJugement!:Number;
    dateJugement!:Date;
    jugementDescriptionModel!:DestcriptionoJugementdescription;
    forcatModel!:Forcat;
    algharamaModels:Array<Algharama>=[];
}
