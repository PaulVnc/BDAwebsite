import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  clubs = [
    {
      name:'le RIG',
      desc:'Club de modélisation 3D',
      info:
      'Au RIG on apprend la 3D, majoritairement à travers le logiciel gratuit et opensource Blender3D'
      +' rendez-vous le mardi de 21h à 23h !',
      image:'/assets/images/leRIG.png'
    },
    {
      name:'Club Jeux',
      desc:'Club de jeux et divertissements',
      info:'Le club jeux regorge de moyens de se divertir, allant des jeux de société aux jeux vidéos en passant par le billard',
      image:'/assets/images/CJ.png'
    },
    {
      name:'Anim\'INT',
      desc:'Club de Japanimation',
      info:'Anim\'INT propose des diffusions hebdomadaires de films d\'animation japonaise le jeudi,'
      +' ainsi que des nocturnes, 3-4 fois par an.'
      +'Anim\'INT dispose également d\'une large collection de manga, entreposés au Club Jeux',
      image:'/assets/images/AnimINT.png'
    },
    {
      name:'Aparté',
      desc:'Club de Théatre',
      info:'Les séances hebdomadaires d\'Aparté se tiennent le jeudi de 18h à 20h.'
      +' On y répète une pièce en vue d\'une représentation à la fin de l\'année',
      image:'/assets/images/Aparté.png'
    },
    {
      name:'CinéClub',
      desc:'Club de cinématographie',
      info:'Le CinéClub organise des projections de films tous les lundi, '
      +'et organise également des "48h",'
      +' évènements pendant lesquels il faut réaliser un court-métrage de A à Z en équipe durant les 48h imparties !',
      image:'/assets/images/CinéClub.png'
    },
    {
      name:'La Band\'À Michel',
      desc:'La fanfare du Campus',
      info:'La Band\'À Michel ("Band\'À" pour les intimes) est la fanfare du campus.'
      +' On y joue un peu tout et n\'importe quoi, le but étant de mettre de l\'ambiance en faisant du bruit',
      image:'/assets/images/BandÀMichel.png'
    },
    {
      name:'Club\'Zik',
      desc:'Club de Musique',
      info:'Le Club\'Zik est un local disponible 24h/24-7j/7 pour la maudique somme de 10€ pour votre scolarité.'
      +'On peut s\'y entrainer, retrouver des potes pour jammer,'
      +' ou juste venir écouter les masterclass qui s\'y créent à 3h du mat\'',
      image:'/assets/images/CZ.jpg'
    },
    {
      name:'Cook\'IT',
      desc:'Club de Gastronomie',
      info:'Cook\'IT est un club important dans la vie associative,'
      +' car il se charge notamment des prestations pendant les évènements (soirées, meeting etc.)'
      +' Mais Cook\'IT c\'est aussi et surtout des moments de partage, pendant les bonnes bouffes par exemple',
      image:'/assets/images/CookIT.png'
    },
    {
      name:'Tell The Tale',
      desc:'Club de narration et de littérature',
      info:'Ses cours et ateliers sont là pour vous faire comprendre pourquoi vous n\'arrivez plus à'
      +' sortir de vos oeuvres préférées, et surtout pour vous apprendre à faire pareil ! '
      +'Tous les supports artistiques sont étudiés (roman, théâtre, cinéma...),'
      +'alors préparez vos plumes, ce club n\'attend plus que vous pour partager l\'amour de la narration et de l\'écriture',
      image:'/assets/images/TTT.png'
    },
    {
      name:'Paint\'IT',
      desc:'Club d\'art graphique',
      info:'À Paint\'IT on fait tout ce qui est art graphique. Du dessin (traditionnel ou digital) '
      +'à la peinture, en passant par le pixel art ou encore la poterie,'
      +' venez libérer votre imagination aux séances hebdomadaires du lundi, de 18h à 20h !',
      image:'/assets/images/PaintIT_name.png'
    },
    {
      name:'Emoty:S',
      desc:'Club de comédie musicale',
      info:'Tu es musicien, chanteur, danseur, débutant ou passionné?'
      +'Emoty:S te propose de créer une comédie musicale intégralement.'
      +'Du script à la mise en scène, en passant par les décors, l\'écriture de chanson'
      +'ou encore les chorégraphies, tous les talents sont requis !'
      +'Emoty:S c\'est aussi des cours de chant tous les mardis soir de 21h à 23h et ouverts à tous!',
      image:'/assets/images/EmotyS.png'
    },
    {
      name:'Déclic',
      desc:'Club de photographie',
      info:'Présent à tous les évènements associatifs du campus pour immortaliser les meilleurs moments,'
          +' Déclic réalise aussi des prestations professionnelles pour les écoles et des entreprises.'
          +' Surtout, Déclic propose des formations, des sorties photos, des shootings et des ateliers'
          +' pour tous les curieux ou passionnés de photographie.'
          +' Bref, à Déclic on vient pour s\'éclater en prenant des photos, pour progresser et aussi pour'
          +' capturer les meilleurs souvenirs, toujours dans la bonne humeur !',
      image:'/assets/images/Declic.png'
    },
    {
      name:'Agora',
      desc:'Club de débats',
      info:'Tout est dans le nom: "Agora". C\'est littéralement la place de discussion.'
          +' Dans ce club de débats, tous les sujets peuvent être abordés'
          +' et chacun est libre de défendre son point de vue,'
          +' avec plus ou moins d\'élégance dans la voix.',
      image:'/assets/images/Agora.png'
    },
    {
      name:'Belly Dance',
      desc:'Club de danse orientale',
      info:'Aucune base et niveau ne sont requis pour rejoindre le club, et tout le monde est le bienvenu !'
          +' Alors n\'hésitez pas à vous faire envoûter par cette magnifique danse et à venir aux entraînements !',
      image:'/assets/images/BellyDance.png'
    },
    {
      name:'INTerlude',
      desc:'Orchestre du campus',
      info:'Club d\'amateurs de musique, les arrangements sont faits maison'
          +' donc quelque soit ton instrument et ton niveau tu as ta place à INTerlude !'
          +' Les répétitions se font le mardi en fin d\'après-midi, et INTerlude se produit généralement aux scènes ouvertes.'
          +' Si tu as laissé ton instrument prendre la poussière pendant la prépa ou que tu veux simplement faire de la musique,'
          +' ce club est fait pour toi !',
      image:'/assets/images/INTerlude.png'
    },
    {
      name:'Spades',
      desc:'club de magie',
      info:'Centré autour de la manipulation des cartes on peut y apprendre des tours spectaculaires mais aussi des mélanges'
          +' et coupes de cartes renversants',
      image:'/assets/images/Spades.png'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
