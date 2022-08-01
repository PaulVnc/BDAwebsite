import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events = [
    {
      name:'Journée BDA SEI',
      description:'Le BDA organise une journée d\'accueil pour les premières années. Au programme : plusieurs activités en lien avec l\'art, tel qu\'un défis photos ou encore un concours de chorégraphie. L\'objectif de cette journée est avant tout de permettre aux nouveaux arrivants de prendre leur marque et de favoriser la discussion que cela soit entre eux ou avec leurs aînés.',
      image:'/assets/images/seiBDA.jpg',
    },
    {
      name:'Soiree BDA SEI',
      description:'Le BDA organise avec l\'Asint (association sportive de l\'INT), la première soirée de l\'année. Premier avant-goût de nombreuses autres qui rythmeront la vie des étudiants, et cela, même après leur départ pour certains.',
      image:'/assets/images/soiree2021.jpg'
    },
    {
      name:'Scéne Ouverte SEI',
      description:'La première scène ouverte de l\'année, elle est l\'occasion de montrer aux nouveaux arrivants ce qu\'offrent certains des clubs du BDA : de la danse, au théâtre, en passant par la musique. Il s\'agit de mettre en avant les talents qui composent les clubs du BDA, afin que les premières années puissent trouver leur voie.',
      image:'/assets/images/SO2021.jpg'
    },
    {
      name:'Scènes Ouvertes',
      description:'Plusieurs scènes ouvertes ont lieu durant l\'année. On y trouve un variété de talents, qu\'ils soient individuels ou en groupe, représentant un club ou non, toutes les formes d\'art sont les bienvenues!',
      image:'/assets/images/scene_ouverte2.jpg'
    },
    {
      name:'Journée de Noël',
      description:'A l\'occasion des fêtes de Noël / des célébrations hivernales, le BDA organise un marché de Noël, où chaque club peu tenir un stand, le tout accompagné d\'un buffet réalisé par Cook\'It. À la fin de cette journée, les spectateurs ont l\'occasion d\'assister à des prestations musicales et scéniques, ainsi qu\'à des chorégraphies de danse.',
      image:'/assets/images/marche_noel.jpg'
    },
    {
      name:'Soirée de Noël',
      description:'À ne pas louper !. Il s\'agit de la plus grosse soirée de l\'année, co-organisée par le BDE le BDA et l\'ASINT. Elle a lieu au forum et fait généralement intervenir un artiste extérieur',
      image:'/assets/images/noel.jpg'
    },
    {
      name:'Soirée BDA',
      description:'Dans les moindres détails, le BDA se charge d\'organiser une soirée afin d\'animer la vie du campus. Le thème choisit change chaque année, ainsi que les animations qui s\'y déroulent.',
      image:'/assets/images/soireeArtifice.jpg'
    },
    {
      name:'Festiv\'Art',
      description:'Le Festiv\'Art, alias la semaine des arts, est l\'un des plus importants événements du BDA. Au cours de cette semaine, diverses activités sont organisées autour d\'un thème choisi. L\'objectif de cet événement est de faire la promotion des arts, et ce sous toutes ses formes.',
      image:'/assets/images/festivart.jpg'
    },
    {
      name:'Cabaret',
      description:'Durant le Festiv\'art, prend place un autre événement majeur du BDA : le Cabaret. Comme le nom l\'indique, le BDA organise un spectacle qui propose au public d\'y assister tout en partageant un repas préparé par Cook\'It. Le show est assuré par les différents clubs de l\'association : danse, théâtre, musique, et bien plus encore sont au programme.',
      image:'/assets/images/cabaretArtifice.jpg'
    },
    {
      name:'INT\'s Got Talent',
      description:'Le BDA, par le biais de l\'INT\'s Got Talent, invite les étudiants à montrer leur talent. À la différence d\'une scène ouverte, il s\'agit d\'un concours, il y a donc un jury et des prix pour les gagnants. De plus, cet événement ne s\'adresse pas aux clubs, mais directement aux étudiants désirant partager leur savoir-faire unique, dans des domaines parfois des plus étonnants.',
      image:'/assets/images/INTGTArtifice.jpg'
    },
    {
      name:'Relations Artistiques',
      description:'Tout au long de l\'année, le pôle relation artistique propose (aux membres du BDA?) des sorties en lien avec l\'art, et ce, à des tarifs préférentiels. Pièces de théâtre, comédies musicales, et bien plus encore, seront de mises.',
      image:'/assets/images/ra.jpg'
    }
  ]

}
