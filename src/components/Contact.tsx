import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function Contact() {
 return(   
    <Card className="flex flex-col content-center	 w-[550px] h-[90vh] m-10">
      <CardContent className="my-10">
        <form>
          <div className="grid w-full items-center gap-5">
            <div className="flex flex-row text-xl">
              <div>
                <Label htmlFor="Nom">Nom</Label>
                <Input id="Nom" placeholder="Votre nom ici" className="w-60"/>
              </div>
              <div className="ml-6">
                <Label htmlFor="prénom">prénom</Label>
                <Input id="prénom" placeholder="Votre prénom ici" className="w-60"/>
              </div>
            </div>
            <div className="text-xl flex flex-col ">
                <Label htmlFor="Entreprise" className="mt-2 mb-1">Entreprise</Label>
                <Input id="Entreprise" placeholder="Le nom de votre entreprise" className="w-full"/>
                <Label htmlFor="emploi" className="mt-6 mb-1">Titre d'emploi</Label>
                <Input id="emploi" placeholder="Ton poste" className="w-full"/>
                <Label htmlFor="Réponse" className="mt-6 mb-1">Qu’attendez-vous le plus de nhannik ?</Label>
                <Input id="Réponse" placeholder="VotreRéponse" className="w-full h-14"/>
                <CardDescription>Ce champ est facultatif, mais il nous permettrait de vous informer une fois cette fonctionnalité prête</CardDescription>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-[200px] bg-[#006fee]">Envoyer</Button>
      </CardFooter>
    </Card>
   )
}
export default Contact;