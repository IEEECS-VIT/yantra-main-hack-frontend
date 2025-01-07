export interface ProblemStatement {
  id: number;
  statementID: string;
  title: string;
  category: string;
  description: {
    summary: string;
    objective: string;
    expectedOutcomes: string;
  };
}

export const data: ProblemStatement[] = [
  {
    id: 1,
    statementID: "HCHEM01",
    title: "Leak Detection in Pipelines",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Pipeline leaks pose environmental, safety, and economic risks. IoT-enabled\nsystems with distributed sensors can monitor pipelines to detect and mitigate leaks.",
      objective:
        "Design a real-time leak detection system that identifies and locates leaks using\npressure, flow rates, or chemical compound sensors. Integrate with control systems to initiate automatic containment protocols.  Analyze sensor data for anomalies and generate alerts with precise geolocation.",
      expectedOutcomes:
        "Reduced environmental impact, enhanced safety, and minimized\noperational losses.",
    },
  },
  {
    id: 2,
    statementID: "HCHEM02",
    title: "Predictive Maintenance for Equipment",
    category: "Software",
    description: {
      summary:
        "Description: Predictive maintenance helps avoid unplanned equipment downtime by\nidentifying potential failures before they occur.",
      objective:
        "Build an AI-powered system to monitor equipment health, predict failures, and\nrecommend maintenance actions. Use historical and real-time operational data to identify failure patterns. Automate maintenance scheduling to ensure operational continuity.",
      expectedOutcomes:
        "Reduced downtime, lower maintenance costs, and improved equipment\nreliability.",
    },
  },
  {
    id: 3,
    statementID: "HCHEM03",
    title: "Carbon Capture and Utilization (CCU)",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Carbon capture and utilization technology can mitigate CO\u2082 emissions by\nconverting captured CO\u2082 into valuable chemicals or fuels.",
      objective:
        "Develop an energy-efficient CCU system that integrates carbon capture with\ncatalytic conversion. Use technologies like solvent absorption or membrane separation for efficient\nCO\u2082 capture. Adapt the system for seamless integration into existing industrial setups.",
      expectedOutcomes:
        "Reduced carbon emissions, new revenue streams, and a step toward\nsustainable industry practices.",
    },
  },
  {
    id: 4,
    statementID: "HCHEM04",
    title: "Self-Healing Polymers",
    category: "Hardware",
    description: {
      summary:
        "Description: Frequent wear and tear of materials result in waste and maintenance costs. Self-\nhealing polymers can autonomously repair damage, improving durability.",
      objective:
        "Develop polymers with self-healing properties triggered by heat, light, or\nmoisture. Innovation: Use techniques like microencapsulation or reversible chemical bonds. Apply in coatings for industrial machinery, infrastructure, and consumer goods.",
      expectedOutcomes:
        "Increased material lifespan, reduced waste, and enhanced durability\nacross applications.",
    },
  },
  {
    id: 5,
    statementID: "HCHEM05",
    title: "Nanoparticle-Based Drug Delivery Systems",
    category: "Hardware",
    description: {
      summary:
        "Description: Nanoparticles offer precise and controlled drug delivery, improving treatment\nefficacy and reducing side effects.",
      objective:
        "Develop a system using biodegradable nanoparticles for targeted drug delivery to\nspecific tissues or cells. Address drug stability, controlled release, and targeting accuracy. Applications:\nApply in therapies requiring high precision, such as cancer treatment.",
      expectedOutcomes:
        "Improved therapeutic outcomes, reduced side effects, and advancements in precision\nmedicine.",
    },
  },
  {
    id: 6,
    statementID: "HCHEM06",
    title: "AI-Optimized Sustainable Chemical Process Design\n",
    category: "Software",
    description: {
      summary:
        "Description: Optimizing chemical processes to reduce energy consumption and\nenvironmental impact is key to making industrial practices more sustainable. AI can be used\nto analyze and adjust process parameters in real-time, leading to more efficient and eco-\nfriendly chemical production.",
      objective:
        "Develop an AI-based system that optimizes chemical process parameters to\nminimize energy consumption and reduce environmental impact, promoting sustainable\nindustrial practices.",
      expectedOutcomes:
        "Reduced energy consumption in chemical processes, Lower\nenvironmental impact, More sustainable chemical production systems.",
    },
  },
  {
    id: 7,
    statementID: "HCHEM07",
    title:
      "AI-Powered Predictive Maintenance in Chemical Plants\n",
    category: "Software",
    description: {
      summary:
        "Description: Predictive maintenance helps prevent failures and improve the operational\nefficiency of chemical plants by monitoring equipment health. AI can predict potential\nfailures and suggest maintenance actions, reducing downtime and improving safety.",
      objective:
        "Create an AI-driven predictive maintenance system that monitors equipment\nhealth in chemical plants, anticipating failures to enhance safety and operational efficiency.",
      expectedOutcomes:
        "Reduced downtime, Enhanced safety in chemical plants, Prolonged\nequipment lifespan, Improved operational efficiency.",
    },
  },
  {
    id: 8,
    statementID: "HBIOT01",
    title: "Smart Crop Rotation Optimization",
    category: "Software",
    description: {
      summary:
        "Description: Crop rotation is critical for maintaining soil fertility and mitigating climate\nchange. Alternating C3 and C4 plants optimizes photosynthesis and reduces carbon\nemissions.",
      objective:
        "Develop an AI/ML tool to recommend optimal crop rotation patterns. Data\nAnalysis: Use historical and climatic data to analyze crop yields.",
      expectedOutcomes:
        "Enhance agricultural productivity, reduce carbon footprints, and\npromote sustainable farming practices.",
    },
  },
  {
    id: 9,
    statementID: "HBIOT02",
    title: "Precision Food Adulterant Detection with AI",
    category: "Software",
    description: {
      summary:
        "Description: Food adulteration is a significant public health challenge. Identifying\nadulterants efficiently requires advanced computational methods.",
      objective:
        "Design an AI-powered system to classify food adulterants. Leverage big data to identify adulteration trends. Machine Learning: Build\npredictive models using chemical databases.",
      expectedOutcomes:
        "Accurate detection of food adulterants, improved public health, and\nsafer food supply chains.",
    },
  },
  {
    id: 10,
    statementID: "HBIOT03",
    title: "AI for Bioremediation Pathway Prediction",
    category: "Software",
    description: {
      summary:
        "Description: Bioremediation using microbes can reduce environmental pollutants, but\npredicting biodegradation pathways remains a challenge.",
      objective:
        "Create an AI platform to predict biodegradation pathways. Analyze microbial data to identify biodegradation capabilities. Use computational biology datasets to map degradation routes.",
      expectedOutcomes:
        "Accelerate environmental cleanup and enhance bioremediation\neffectiveness.",
    },
  },
  {
    id: 11,
    statementID: "HBIOT04",
    title: "Biosensor Signal Processing Software",
    category: "Software",
    description: {
      summary:
        "Description: Biosensors generate complex data that require advanced software for\naccurate signal interpretation.",
      objective:
        "Develop software to process biosensor data. Enhance detection precision for diagnostics and wearables. Provide actionable insights for healthcare applications.",
      expectedOutcomes:
        "Improved diagnostic accuracy and better healthcare decision-\nmaking.",
    },
  },
  {
    id: 12,
    statementID: "HBIOT05",
    title: "AI-Enhanced Bioremediation Monitoring System\n",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Bioremediation is a sustainable method for cleaning up environmental\ncontaminants using biological agents. AI can optimize and monitor the bioremediation\nprocess, ensuring that the biological agents are effectively degrading pollutants and\nenhancing environmental restoration efforts.",
      objective:
        "Create an AI-driven system to monitor and optimize bioremediation processes,\nimproving the efficiency of using biological agents to clean up environmental contaminants.",
      expectedOutcomes:
        "More efficient bioremediation processes, Enhanced environmental\nclean-up efforts, Improved sustainability in pollution management.",
    },
  },
  {
    id: 13,
    statementID: "HBIOT06",
    title: "AI-Powered Personalized Medicine Platform",
    category: "Software",
    description: {
      summary:
        "Description: Personalized medicine tailors healthcare to individual genetic profiles,\nimproving treatment outcomes and reducing adverse effects. AI can analyze genetic data and\nother health information to recommend customized treatment plans, making healthcare more\neffective and patient-centric.",
      objective:
        "Develop an AI-based platform that analyzes individual genetic profiles to\nrecommend personalized treatment plans, enhancing patient outcomes and minimizing\nadverse reactions.",
      expectedOutcomes:
        "Improved treatment accuracy, Reduced adverse drug reactions, More\npersonalized healthcare delivery.",
    },
  },
  {
    id: 14,
    statementID: "HCIVL01",
    title: "Smart Monitoring and Analysis System for Concrete Structures",
    category: "Hardware",
    description: {
      summary:
        "Description: Develop a system for real-time monitoring of concrete curing and automated crack detection using practical tools and imaging technology.",
      objective:
        "Monitor curing parameters like moisture and temperature with simple tools and use imaging devices such as drones or smartphones to detect and analyze structural cracks.\n Enhance construction quality by addressing curing deviations and improve structural safety through early crack detection.",
      expectedOutcomes:
        "Stronger and more durable concrete, reduced material waste, and efficient crack analysis for better maintenance.",
    },
  },
  {
    id: 15,
    statementID: "HCIVL02",
    title: "Digital Twins for Real-Time Problem Solving",
    category: "Software",
    description: {
      summary:
        "Description: Develop virtual replicas of physical systems to analyze and optimize performance in real-time.",
      objective:
        "Utilize simulation tools and analytics within digital twin frameworks to model and monitor various processes or systems effectively.\nEnable predictive maintenance, performance optimization, and real-time decision-making for diverse use cases such as infrastructure, manufacturing, or energy systems.",
      expectedOutcomes:
        "Enhanced system performance, reduced operational costs, and improved efficiency through data-driven insights and proactive solutions.",
    },
  },
  {
    id: 16,
    statementID: "HCIVL03",
    title: "Smart Infrastructure Maintenance Systems",
    category: "Hardware",
    description: {
      summary:
        "Description: Develop autonomous, self-repairing infrastructure systems that use advanced technologies for real-time evaluation and maintenance.",
      objective:
        "Implement self-healing materials and automated detection systems that autonomously repair damage or evaluate and report defects, adapting to environmental stressors and ensuring long-term durability. Critical infrastructure such as airport runways, airfields, military bases, and municipal roads.",
      expectedOutcomes:
        "Reduced maintenance costs, extended infrastructure lifespan, enhanced safety, and improved resource allocation through real-time data collection and proactive repairs.",
    },
  },
  {
    id: 17,
    statementID: "HCIVL04",
    title: "Advanced Traffic Control System for Urban Road Network",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Urban traffic management needs adaptive solutions to optimize flow and reduce environmental impact.",
      objective:
        "Develop a traffic control system using dynamic lanes, modular intersections, and predictive modeling. Focus on sustainability, structural resilience, and minimal disruption during implementation.",
      expectedOutcomes:
        "Improved traffic flow, Reduced congestion, Sustainable and resilient infrastructure.",
    },
  },
  {
    id: 18,
    statementID: "HCIVL05",
    title: "AI-Powered Sustainable Urban Planning Tool",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Urban planning is critical for creating livable and sustainable cities. AI can\noptimize urban layouts to improve resource efficiency, reduce environmental impact, and\nenhance quality of life for residents. This includes optimizing land use, transportation\nsystems, and energy consumption.",
      objective:
        "Create an AI-driven platform that assists in designing urban layouts optimized\nfor resource efficiency, reduced environmental impact, and improved quality of life.",
      expectedOutcomes:
        "More sustainable and efficient urban layouts, Improved resource\nmanagement, Reduced environmental footprint of urban environments.",
    },
  },
  {
    id: 19,
    statementID: "HMECH01",
    title: "Smart Prosthetic Limb with Enhanced Comfort and Functionality",
    category: "Hardware",
    description: {
      summary:
        "Description: Prosthetic limbs must balance comfort, durability, and advanced functionality\nwhile remaining affordable and user-friendly.",
      objective:
        "Design and prototype a smart prosthetic limb integrating technology for enhanced\nadaptability, addressing affordability and sustainability. Use sensors and actuators for improved movement and adaptability to various\ntasks.",
      expectedOutcomes:
        "Affordable, functional, and user-friendly prosthetics that improve\nquality of life for users.",
    },
  },
  {
    id: 20,
    statementID: "HMECH02",
    title: "Modular Lightweight Body Armor for Soldiers",
    category: "Hardware",
    description: {
      summary:
        "Description: Modern soldiers require protective gear that offers safety without compromising mobility.",
      objective:
        "Design a modular, lightweight body armor system using advanced materials. Incorporate modular components for flexibility and customization. Enhance soldier protection and mobility in diverse combat scenarios.",
      expectedOutcomes:
        "Durable, lightweight body armor with improved functionality and adaptability.",
    },
  },
  {
    id: 21,
    statementID: "HMECH03",
    title: "Drone Swarm Technology for Autonomous Operations",
    category: "Hardware",
    description: {
      summary:
        "Description: Challenging terrains require autonomous reconnaissance and surveillance solutions.",
      objective:
        "Develop a drone swarm system capable of reconnaissance, surveillance, and target acquisition in dense forests and urban areas. Utilize AI for autonomous navigation and coordination. Applications: Support Indian Army operations in challenging environments.",
      expectedOutcomes:
        "Improved situational awareness and operational efficiency in military applications.",
    },
  },
  {
    id: 22,
    statementID: "HMECH04",
    title: "Smart Cooling System for Data Centers and Industrial Machines",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: High energy consumption in cooling systems demands smarter and more efficient solutions.",
      objective:
        "Design a smart cooling system for data centers and industrial machines that dynamically regulates temperature using real-time data. Leverage advanced sensors and adaptive control strategies for efficient cooling. Reduce energy consumption and operational costs.",
      expectedOutcomes:
        "Energy-efficient cooling systems that enhance performance and reduce environmental impact.",
    },
  },
  {
    id: 23,
    statementID: "HMECH05",
    title:
      "AI-Enhanced Design of Sustainable Mechanical Systems\n",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: The design of mechanical systems plays a significant role in determining their\nenergy efficiency and environmental impact. AI can optimize the design process to ensure\nthat mechanical systems are more sustainable and energy-efficient, reducing their ecological\nfootprint.",
      objective:
        "Develop an AI-assisted platform that optimizes the design of mechanical systems\nto enhance energy efficiency and reduce environmental impact.",
      expectedOutcomes:
        "Improved design of energy-efficient systems, Reduced environmental\nimpact from mechanical systems, More sustainable mechanical engineering practices.",
    },
  },
  {
    id: 24,
    statementID: "HMECH06",
    title: "Innovative Thermal Management System for Automotive Applications",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Effective thermal management is essential for energy efficiency and performance in vehicles. Address challenges like battery regulation in EVs, engine cooling, and cabin climate control while ensuring sustainability and adaptability.",
      objective:
        "Develop an advanced thermal management system to optimize heat dissipation and energy efficiency in automotive applications, focusing on sustainability, cost-effectiveness, and adaptability to evolving technologies.",
      expectedOutcomes:
        "Improved energy efficiency, Enhanced vehicle performance, Sustainable and adaptable thermal management solution",
    },
  },
  {
    id: 25,
    statementID: "HCSIT01",
    title: "Countering Misinformation and Ethical Challenges in Generative AI",
    category: "Software",
    description: {
      summary:
        "Description: The rapid increase of AI-generated content, such as deep fakes, poses threats to digital content integrity and ethical standards.",
      objective:
        "Build a system to detect manipulated media, mitigate misinformation, and promote ethical AI deployment. Use advanced algorithms to analyze images, videos, and text for signs of manipulation in real time. Implement guidelines and tools for responsible AI usage.",
      expectedOutcomes:
        "Reduced spread of misinformation, ethical AI practices, and enhanced trust in digital media.",
    },
  },
  {
    id: 26,
    statementID: "HCSIT02",
    title: "Immersive AR/VR Training for High-Risk Scenarios",
    category: "Software",
    description: {
      summary:
        "Description: Training for high-risk scenarios requires realistic environments without endangering participants. AR/VR provides a safe, controlled alternative.",
      objective:
        "Develop an immersive AR/VR solution for emergency response or hazardous material handling training. Simulate high-risk scenarios with real-time feedback for skill improvement. \nApplications: Emergency responders, industrial workers, and disaster management teams.",
      expectedOutcomes:
        "Safer training environments, improved preparedness, and reduced on-site accidents.",
    },
  },
  {
    id: 27,
    statementID: "HCSIT03",
    title: "Cloud Application Dependency Analyzer",
    category: "Software",
    description: {
      summary:
        "Description: Cloud applications often suffer from bottlenecks or single points of failure due to complex dependencies.",
      objective:
        "Build a tool to automatically analyze cloud application dependencies and identify vulnerabilities. Detect and flag dependency bottlenecks or failure points. Provide actionable insights to improve system robustness.",
      expectedOutcomes:
        "More reliable cloud applications, minimized downtimes, and improved system performance.",
    },
  },
  {
    id: 28,
    statementID: "HCSIT04",
    title: "AI-Powered Data Quality Enhancer",
    category: "Software",
    description: {
      summary:
        "Description: Inconsistent and low-quality data hinder machine learning model training. AI tools can enhance data quality for better results.",
      objective:
        "Develop an AI tool to detect inconsistencies, duplicates, and anomalies in datasets. Provide suggestions for cleaning and diversifying data.Enhance machine learning model training and data reliability.",
      expectedOutcomes:
        "Improved data quality, more accurate ML models, and reduced preprocessing time.",
    },
  },
  {
    id: 29,
    statementID: "HCSIT05",
    title: "Mental Health Support Platform for Women in High-Stress Careers",
    category: "Software",
    description: {
      summary:
        "Description: Women in high-stress careers often face challenges like burnout and imposter syndrome, necessitating tailored mental health support.",
      objective:
        "Develop a platform offering mental health resources and peer support for women in demanding professions. Provide tailored solutions for individual needs.",
      expectedOutcomes:
        "Reduced burnout, improved work-life balance, and better mental health support.",
    },
  },
  {
    id: 30,
    statementID: "HCSIT06",
    title: "AI-Powered Waste Management System\n",
    category: "Software",
    description: {
      summary:
        "Description: Effective waste management and recycling are crucial for sustainable urban development. AI can automate waste segregation and optimize recycling processes to improve the efficiency of waste management systems.",
      objective:
        "Develop an AI-based solution to automate waste segregation and optimize recycling processes, enhancing efficiency in waste management systems.\nExpected Outcomes : Waste classification and segregation using AI models, Optimization of recycling workflows, Monitoring waste generation and recycling rates.",
      expectedOutcomes: "",
    },
  },
  {
    id: 31,
    statementID: "HCSIT07",
    title: "AI-Driven Renewable Energy Forecasting\n",
    category: "Software",
    description: {
      summary:
        "Description: Accurate forecasting of renewable energy generation is key to balancing supply and demand in power grids. AI models can predict energy output from solar and wind sources, helping to stabilize the grid and improve energy distribution.",
      objective:
        "Create an AI model to predict energy generation from renewable sources, such as solar and wind, to enhance grid stability and energy distribution. Predict energy generation from renewable sources, Optimize energy storage and distribution, Improve grid management for renewable energy integration.",
      expectedOutcomes:
        "More stable and reliable renewable energy supply, Enhanced grid\nefficiency and integration, Reduced reliance on non-renewable energy sources.",
    },
  },
  {
    id: 32,
    statementID: "HECEE01",
    title: "Wearable Technology for Marathon Runners",
    category: "Hardware",
    description: {
      summary:
        "Description: Monitoring physiological parameters during marathons ensures runner safety and performance optimization.",
      objective:
        "Create a wearable device to monitor heart rate, ECG, blood pressure, and blood oxygen levels in real time. Provide feedback and alerts to runners based on physiological data.Enhance performance and prevent health risks during prolonged physical activity.",
      expectedOutcomes:
        "Improved runner safety, optimized performance, and actionable health insights.",
    },
  },
  {
    id: 33,
    statementID: "HECEE02",
    title: "Gesture-Controlled Systems Without Cameras",
    category: "Hardware",
    description: {
      summary:
        "Description: Gesture-based systems can enhance user interaction while maintaining privacy and usability in various conditions.",
      objective:
        "Design a gesture recognition system using non-visual sensors like infrared or ultrasonic sensors. Enable control of electronic devices without the need for cameras or visual data. Ensure user data is secure with non-visual sensing methods.",
      expectedOutcomes:
        "Increased device accessibility, improved privacy, and enhanced usability in low-light conditions.",
    },
  },
  {
    id: 34,
    statementID: "HECEE03",
    title: "Drones for Tunnel or Mine Mapping and Fault Detection",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Underground tunnels and mines require accurate mapping and fault detection for safety and operational efficiency.",
      objective:
        "Create an autonomous drone system to map tunnels, detect structural faults, and monitor hazardous conditions. Enhance safety and operational planning in underground environments.",
      expectedOutcomes:
        "Safer mining operations, reduced inspection time, and detailed structural analysis.",
    },
  },
  {
    id: 35,
    statementID: "HECEE04",
    title: "FPGA Based Application",
    category: "Hardware",
    description: {
      summary:
        "Description: FPGA platforms offer high-speed processing and efficiency for computationally intensive tasks like image processing.",
      objective:
        "Implement a real-time image processing system on an FPGA platform for tasks like edge detection or object recognition. Implement hardware acceleration for faster processing and energy efficiency. Real-time industrial vision, surveillance, or robotics.",
      expectedOutcomes:
        "Faster image processing, reduced power consumption, and practical demonstration of FPGA advantages.",
    },
  },
  {
    id: 36,
    statementID: "HECEE05",
    title: "Intelligent Battery Management System for Renewable Energy",
    category: "Hardware",
    description: {
      summary:
        "Description: Develop a BMS to optimize energy storage and distribution from renewable sources like solar and wind, ensuring efficient charging, enhanced battery lifespan, and real-time monitoring.",
      objective:
        "Create a system that improves renewable energy efficiency, ensures seamless integration, monitors battery health, and provides intuitive control interfaces.\nExpected Outcome: A functional BMS prototype with real-time monitoring, efficient energy management, smooth renewable energy integration, and user-friendly control.",
      expectedOutcomes: "",
    },
  },
  {
    id: 37,
    statementID: "HECEE06",
    title: "AI-Optimized Spectrum Management for 5G Networks\n",
    category: "Software",
    description: {
      summary:
        "Description: Efficient spectrum management is crucial for the success of 5G networks. AI can\ndynamically allocate and manage radio frequency spectrum to optimize bandwidth\nutilization, reduce interference, and improve communication quality.",
      objective:
        "Develop an AI-based system that dynamically allocates and manages radio\nfrequency spectrum in 5G networks to optimize bandwidth utilization, reduce interference,\nand enhance communication quality.",
      expectedOutcomes:
        "Optimized bandwidth usage, Reduced network interference, Enhanced\ncommunication quality in 5G networks.",
    },
  },
  {
    id: 38,
    statementID: "HECEE07",
    title:
      "AI-Driven Intelligent Antenna Systems for Sustainable Connectivity\n",
    category: "Software",
    description: {
      summary:
        "Description: Intelligent antenna systems adapt to environmental changes and user needs,\nenhancing connectivity. AI can enable antennas to adjust dynamically, optimizing signal\nstrength and reducing energy consumption for more sustainable communication solutions.",
      objective:
        "Create an AI-powered intelligent antenna system that adapts to environmental\nconditions and user demands, optimizing signal strength and energy consumption to provide\nsustainable and efficient connectivity solutions.",
      expectedOutcomes:
        "Improved signal strength, Reduced energy consumption, More\nsustainable connectivity solutions.",
    },
  },
  {
    id: 39,
    statementID: "HECEE08",
    title:
      "AI-Driven Fault Detection and Predictive Maintenance in Electrical Systems\n",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Preventing electrical system failures is essential for maintaining infrastructure\nreliability. AI can monitor electrical systems, detect faults in real-time, and predict\nmaintenance needs, improving efficiency and minimizing downtime.",
      objective:
        "Create an AI-powered system that monitors electrical infrastructure to detect faults\nin real-time and predict maintenance needs, thereby reducing downtime and enhancing\nsystem reliability.",
      expectedOutcomes:
        "Reduced downtime, Prolonged lifespan of electrical systems, Enhanced\nsystem reliability and operational efficiency.",
    },
  },
  {
    id: 40,
    statementID: "HECEE09",
    title: "Automated Quality Checking of Export Fruits",
    category: "Software /\nHardware",
    description: {
      summary:
        "Description: Manual fruit inspections are slow and inconsistent, leading to quality issues in exports. An AI-driven system can automate defect detection, ripeness assessment, and quality classification to ensure compliance with export standards.",
      objective:
        "Create an AI-based solution for real-time fruit quality checks, integrating seamlessly with packing lines to improve accuracy and efficiency.",
      expectedOutcomes:
        "Enhanced quality control, reduced rejection rates, and streamlined export processes.",
    },
  },
];
