const moviesMock = [
  {
    id: '7bac7d0a-dff7-4fb6-a6d7-bf7053f2cc6d',
    title: 'Simon',
    year: { $numberInt: '1987' },
    cover: 'http://dummyimage.com/133x221.jpg/cc0000/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: { $numberInt: '26' },
    contentRating: 'PG-13',
    source:
      'http://is.gd/mattis/odio/donec.png?turpis=dui&eget=luctus&elit=rutrum&sodales=nulla&scelerisque=tellus&mauris=in&sit=sagittis&amet=dui&eros=vel&suspendisse=nisl&accumsan=duis&tortor=ac&quis=nibh&turpis=fusce&sed=lacus&ante=purus&vivamus=aliquet&tortor=at&duis=feugiat&mattis=non&egestas=pretium&metus=quis&aenean=lectus&fermentum=suspendisse&donec=potenti&ut=in&mauris=eleifend',
    tags: ['Adventure|Children|Comedy|Fantasy', 'Animation|Comedy|Sci-Fi'],
  },
  {
    id: '78912fe3-54fb-4ae7-b159-4a4ad9bc24c3',
    title: 'Barbarian Queen',
    year: { $numberInt: '1997' },
    cover: 'http://dummyimage.com/249x115.jpg/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: { $numberInt: '54' },
    contentRating: 'PG-13',
    source:
      'http://addthis.com/at/turpis/donec/posuere/metus/vitae.json?lacinia=curabitur&nisi=in&venenatis=libero&tristique=ut&fusce=massa&congue=volutpat&diam=convallis&id=morbi&ornare=odio&imperdiet=odio&sapien=elementum&urna=eu&pretium=interdum&nisl=eu&ut=tincidunt&volutpat=in&sapien=leo&arcu=maecenas&sed=pulvinar&augue=lobortis&aliquam=est&erat=phasellus&volutpat=sit&in=amet&congue=erat&etiam=nulla&justo=tempus&etiam=vivamus&pretium=in&iaculis=felis&justo=eu&in=sapien&hac=cursus&habitasse=vestibulum&platea=proin&dictumst=eu&etiam=mi&faucibus=nulla&cursus=ac&urna=enim&ut=in&tellus=tempor&nulla=turpis&ut=nec&erat=euismod&id=scelerisque&mauris=quam&vulputate=turpis&elementum=adipiscing&nullam=lorem&varius=vitae&nulla=mattis&facilisi=nibh&cras=ligula&non=nec&velit=sem&nec=duis&nisi=aliquam&vulputate=convallis&nonummy=nunc&maecenas=proin&tincidunt=at&lacus=turpis&at=a&velit=pede&vivamus=posuere&vel=nonummy&nulla=integer&eget=non&eros=velit&elementum=donec&pellentesque=diam&quisque=neque&porta=vestibulum&volutpat=eget&erat=vulputate&quisque=ut&erat=ultrices&eros=vel&viverra=augue&eget=vestibulum&congue=ante',
    tags: ['Drama', 'Action|Drama'],
  },
];

module.exports = { moviesMock };
