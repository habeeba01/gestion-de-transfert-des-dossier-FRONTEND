import { Algharama } from "../algharama/algharama";
import { Description } from "../destcriptionossier/description";
import { Jugement } from "../jugement/jugement";
import { User } from "../user/user";


export class Archive {
   //
   numDossier!:number;
   date!:Date;
   etatRetour!:Boolean;
   descriptionDossierModel!:Description;
   jugementModel!:Jugement;
   utilisateur!:User
  
}
