
const grapheneImg = "https://t4.ftcdn.net/jpg/06/77/01/91/360_F_677019116_xHpl8X4wACaSBClEcOikRzhnqho4kE8g.jpg";
const molecularTransistorImg = "https://img.freepik.com/premium-photo/nanoelectronics-circuit-board-with-tiny-components-created-with-generative-ai_419341-83815.jpg"
const nanoOpticsImg = "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fnnano.2014.314/MediaObjects/41565_2015_Article_BFnnano2014314_Figc_HTML.jpg";
const nanostructuredSolarImg= "https://scitechdaily.com/images/Nano-Energy-Concept.jpg"
const nanoMedicineImg = "https://t3.ftcdn.net/jpg/08/05/54/64/360_F_805546401_mcphw7LdMcpqZAKCpeff2vAD2vAgrYSJ.jpg";
const nanoRoboticsImg = "https://d1otjdv2bf0507.cloudfront.net/images/Article_Images/ImageForArticle_5274(1).jpg"

export const NANO_TECHNOLOGY_CONCEPTS = [
  {
    image: grapheneImg, // Assume this is the path to the graphene image
    title: 'Nano-Materials',
    description:
      'Materials engineered at the nanoscale with unique mechanical and electrical properties, such as graphene used in advanced batteries and flexible electronics.',
  },
  {
    image: molecularTransistorImg, // Assume this is the path to the molecular transistor image
    title: 'Nano-Electronics',
    description:
      'Employs nanotechnology to create compact, fast, and energy-efficient devices, like molecular transistors for powerful electronic circuits.',
  },
  {
    image: nanoOpticsImg, // Assume this is the path to the nano-optics image
    title: 'Nano-Optics',
    description:
      'Explores light behavior at the nanoscale, leading to breakthroughs in imaging and more efficient optical communication systems.',
  },
  {
    image: nanoMedicineImg, // Assume this is the path to the nano-medicine image
    title: 'Nano-Medicine',
    description:
      'Uses nanotechnology in medical applications, including targeted drug delivery systems and advanced diagnostic tools to improve healthcare.',
  },
  {
    image: nanostructuredSolarImg, // Assume this is the path to the nanostructured solar panels image
    title: 'Nano-Energy',
    description:
      'Enhances energy production and efficiency through innovative materials, like nanostructured solar panels that capture sunlight effectively.',
  },
  {
    image: nanoRoboticsImg, // Assume this is the path to the nano-robotics image
    title: 'Nano-Robotics',
    description:
      'Focuses on designing nanoscale robots for targeted drug delivery, environmental monitoring, and precision agriculture applications.',
  },
];



export const EXAMPLES = {
  NanoMaterials: [
    {
      title: 'Carbon Nanotubes',
      description:
        'Cylindrical structures made of carbon atoms, exhibiting exceptional strength, flexibility, and electrical properties. Used in electronics, composites, and energy storage devices.',
      image: 'https://d1otjdv2bf0507.cloudfront.net/images/news/ImageForNews_38233_16370795339479791.jpg',
    },
    {
      title: 'Quantum Dots',
      description:
        'Semiconductor nanocrystals that can be tuned to emit specific wavelengths of light, enabling their use in displays, solid-state lighting, and bio-imaging.',
      image: 'https://ana.ir/files/en/news/2023/7/24/27864_816.jpg',
    },
  ],
  NanoElectronics: [
    {
      title: 'Molecular Transistors',
      description:
        'Miniaturized transistors at the nanoscale, allowing for more powerful, energy-efficient, and compact electronic devices such as advanced computer chips and memory storage.',
      image: 'https://img.freepik.com/premium-photo/nanoelectronics-circuit-board-with-tiny-components-created-with-generative-ai_419341-83815.jpg',
    },
    {
      title: 'Nanoscale Memory Devices',
      description:
        'Devices like phase-change memory and magnetic random-access memory (MRAM) offer faster access times, higher storage densities, and improved reliability.',
      image: 'https://scitechdaily.com/images/Artists-Illustration-Electro-Optical-Circuit.jpg',
    },
    {
      title: 'Sensors and Communications',
      description:
        'Nanoscale sensors integrated into wearable technology and IoT devices enable faster, more efficient communication and data processing.',
      image: 'https://t4.ftcdn.net/jpg/08/24/32/03/360_F_824320379_4CYNfSUVW9MeQ1V7cLMI6S1X34FZUk8e.jpg',
    },
  ],
  NanoOptics: [
    {
      title: 'Medical Imaging',
      description:
        'Enhanced imaging techniques, such as super-resolution microscopy, allow for detailed visualization of biological structures at the molecular level, advancing fields like medical diagnostics and biology research.',
      image: 'https://nanoscitec.com/wp-content/uploads/2023/10/Open-Access-Platform.jpg',
    },
    {
      title: 'Nano-Scale Lasers',
      description:
        'Nano-scale lasers and optical components used in telecommunication systems for faster and more efficient data transmission.',
      image: 'https://thumbs.dreamstime.com/b/close-up-precision-welding-process-robot-making-nano-chips-close-up-technological-process-precision-welding-robot-321807667.jpg',
    },
    {
      title: 'Solar Cells',
      description:
        'Nanostructures improve the efficiency of solar cells, capturing and converting sunlight into electricity more effectively.',
      image: 'https://img.freepik.com/premium-photo/nanostructured-solar-panels-with-enhanced-light-absorption-significantly-boosting-renewable-energy-efficiency_964851-152561.jpg',
    },
  ],
  NanoMedicine: [
    {
      title: 'Targeted Drug Delivery',
      description:
        'Nanoparticles encapsulate therapeutic agents and deliver them to specific target sites, improving the effectiveness of treatments while reducing side effects.',
      image: 'https://t3.ftcdn.net/jpg/08/05/54/64/360_F_805546401_mcphw7LdMcpqZAKCpeff2vAD2vAgrYSJ.jpg',
    },
    {
      title: 'Enhanced Imaging',
      description:
        'Nanorobots improve the resolution and accuracy of medical imaging techniques, such as MRI and CT scans, by acting as contrast agents that highlight specific areas.',
      image: 'https://industrywired.com/wp-content/uploads/2020/07/medical-imaging.jpeg',
    },
  ],
  NanoEnergy: [
    {
      title: 'Thermoelectric Materials',
      description:
        'Nanostructured thermoelectric materials convert heat into electricity more efficiently, enhancing energy production and waste heat recovery.',
      image: 'https://genh2hydrogen.com/wp-content/uploads/2022/03/flux-capicitator-electric.jpg',
    },
    {
      title: 'Supercapacitors',
      description:
        'Nanostructured materials increase the storage capacity and charge/discharge rates of supercapacitors, improving energy storage systems.',
      image: 'https://scitechdaily.com/images/Abstract-Water-Energy-Electricity-Art-Concept-Illustration.jpg',
    },
  ],
  NanoRobotics: [
    {
      title: 'Agricultural Nanobots',
      description:
        'Nanobots monitor soil conditions, detect pests, and deliver nutrients directly to plants, leading to more efficient and sustainable farming practices.',
      image: 'https://www.isaaa.org/kc/cropbiotechupdate/files/images/228202420903AM.jpg',
    },
    {
      title: 'Space Exploration Nanobots',
      description:
        'Nanorobots perform tasks in space exploration, such as repairing spacecraft, conducting experiments, and exploring hazardous environments.',
      image: 'https://media.mehrnews.com/d/2022/02/27/3/4076506.jpg',
    },
    {
      title: 'Smart Textiles',
      description:
        'Nanorobots embedded in fabrics create smart textiles that can monitor body temperature, detect toxins, and even administer medications through the skin.',
      image: 'https://debbarrett.com/wp-content/uploads/2019/02/R30711015_g.jpg',
    },
  ],
};

