// IMPORTS //
import "./App.css";
import { DesignRow } from "./DesignRow";

// OBJECTS & PROPS //
function App() {
  const designDecks = [
    {
      movement: "Memphis Milano",
      span: "1981-1987",
      colors: ["Red", "Yellow", "Green"],
      description: "Memphis Milano was an Italian design group , debuting in 1981 and disbanding in ‘87. The group sought to challenge the unquestioned popularization of earth tones and mainly functional design throughout the '60s and '70s, as well as disturb the harsh divide between 'high class' and 'kitschy' interior design. Motifs included abstract, geometrical forms, as well as a largely primary color scheme.",
      forKids: false,
      image: "./memphis-milano.png"
    },
    {
      movement: "Memphis Lite",
      span: "1984-1996",
      colors: ["Cyan", "Indigo", "Fuschia"],
      description: "The genius of Memphis Lite lies in the softening of Milano's harsh lines and palettes, allowing for consumers to explore options that were more subtle, or 'wearable', so to speak. Airbrushed, chalky details are frequently incorporated to break up the constructivist, severe sensibilities of Milano, and this will continue to be popular for years to come.",
      forKids: false,
      image: "/.memphis-lite.png"
    },
    {
      movement: "Utopian Scholastic",
      span: "1987-2003",
      colors: ["Sky Blue", "Greens", "Red-Orange"],
      description: "Utopian Scholastic was used mainly to market 'edutainment' software to children, parents, and schools. Common iconography from this genre includes: realistic collage elements, new-age tech, nature settings, the subtle incorporation of school supplies and scientific equipment. This style both embraces and subverts its predecessor, Memphis Lite; playful sensibilities are certainly carried over from the genre, but a muting of the palette and an emphasis on intellectualism feel distinctly separate.",
      forKids: true,
      image: "./utopian-scholastic.png"
    },
    {
      movement: "Factory Pomo",
      span: "1988-1996",
      colors: ["Indigo", "Yellow", "Mauve"],
      description: "Factory Postmodernism utilizes similar geometrical elements, severe angles, and deeper, secondary colors as Memphis Lite, and also emphasizes scientific curiosity, much like Utopian Scholastic. Uniquely, Factory Pomo, placed much more stock in industrial, pseudo-architectural themes. One will often find gears, sketch lines, and grid paper featured in this style. Because of this, there is a strong emphasis on symmetry and mathematically-perfect shapes, contrasted by the unpredictable nature of asymmetrical details peppered into compositions.",
      forKids: true,
      image: "./factory-pomo.png"
    },
    {
      movement: "Wacky Pomo",
      span: "1992-2007",
      colors: ["Lime Green", "Yellow", "Red"],
      description: "Wacky Postmodernism expands upon the science craze of Utopian Scholastic and Factory Pomo, but brings 2D into a 3D space. This style is characterized by a liberal use of hyper-saturated pigments, surrealist shapes, and stories of 'mad' scientists, specifically. The throughline of Memphis Milano's absurdity and contrarian approach to design is especially clear here.",
      forKids: true,
      image: "./wacky-pomo.png"
    },
    {
      movement: "Y2k Futurism",
      span: "1996-2007",
      colors: ["Aqua", "Chrome", "White"],
      description: "Utilizing the momentum of Utopian Scholastic’s proposal to reside in a technologically enmeshed world, Y2K Futurism promoted a life eased by contemporary electronic products. Y2K not only furthers caters to the appetite for children’s marketing to include S.T.E.M. imagery and themes, but it also carries the Milano/Wacky Pomo torch towards an experimental age of Computer Generated Graphics in the culture. Y2K’s tell-tale design motifs are: a heavy-use of cool tones, an occasional neon accent, realistic chrome textures, and an enthusiastic exploration of 3D graphics.",
      forKids: true,
      image: "./y2k-futurism.png"
    },
  ];

// APP CONTENT RETURN // 
  return (
    <>
      <h1>Children's Graphic Design at the Turn of the Millenium</h1>  
      <p>How contemporary adult design yielded to a renaissance in children's marketing.</p>
      <p className="key">
        Key: 
        <span className="red"> Red </span> = Adult Design || 
        <span className="green"> Green </span> = Children's Design
      </p>
    <table className="design-table">

      <thead>
        <tr>
          <th>Movement Name</th>
          <th>Approximate Time Span</th>
          <th>Color Pallete</th>
          <th className="overview">Movement Overview</th>
          <th>Children's Demographic?</th>
          <th>Visual Example</th>
        </tr>
      </thead>

      <tbody>
        {designDecks.map((movement, index) => {
          return (
            <DesignRow
              key={movement.image}
              odd={index % 2 === 0}
              movement={movement.movement}
              span={movement.span}
              colors={movement.colors}
              description={movement.description}
              forKids={movement.forKids}
              image={movement.image}
            />
          );
        })}
      </tbody>
    </table>
    </>
  )
}

export default App;