import { useState } from 'react';

import { NANO_TECHNOLOGY_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("Selected:", selectedButton);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  // Check if there is a selected topic and examples exist
  if (selectedTopic && EXAMPLES[selectedTopic]) {
    tabContent = (
      <div id="tab-content">
        {EXAMPLES[selectedTopic].map((example, index) => (
          <div key={index} id='tab-data'>
            <h3>{example.title}</h3>
            <div id='tab-content-data' className={`tab-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <p>{example.description}</p>
              <img src={example.image} alt={example.title} width="150px" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {NANO_TECHNOLOGY_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'NanoMaterials'}
              onSelect={() => handleSelect('NanoMaterials')}
            >
              NanoMaterials
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'NanoElectronics'}
              onSelect={() => handleSelect('NanoElectronics')}
            >
              NanoElectronics
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'NanoOptics'}
              onSelect={() => handleSelect('NanoOptics')}
            >
              NanoOptics
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'NanoMedicine'}
              onSelect={() => handleSelect('NanoMedicine')}
            >
              NanoMedicine
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'NanoEnergy'}
              onSelect={() => handleSelect('NanoEnergy')}
            >
              NanoEnergy
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'NanoRobotics'}
              onSelect={() => handleSelect('NanoRobotics')}
            >
              NanoRobotics
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
