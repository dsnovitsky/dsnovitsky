export type Locale = "ru" | "en"

export interface Translations {
  nav: {
    about: string
    stack: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    roleSubtitle: string
    viewProjects: string
    getInTouch: string
    terminal: {
      languages: {
        javascript: {
          name: string
          description: string
        }
        lua: {
          name: string
          description: string
        }
        python: {
          name: string
          description: string
        }
        typescript: {
          name: string
          description: string
        }
      }
    }
  }
  about: {
    title: string
    description: string
    philosophy: string
    keyPoints: string[]
    codeExamples: {
      javascript: string
      lua: string
      python: string
      typescript: string
    }
  }
  stack: {
    title: string
    categories: {
      Languages: string
      Frameworks: string
      Platforms: string
      Databases: string
      Areas: string
    }
    descriptions: {
      [key: string]: string
    }
  }
  projects: {
    title: string
    categories: {
      [key: string]: string
    }
    items: {
      [key: string]: {
        title: string
        description: string
      }
    }
  }
  contact: {
    title: string
    sendMessage: string
    socialNetworks: string
    emailPlaceholder: string
    messagePlaceholder: string
    sendButton: string
  }
  footer: {
    copyright: string
  }
}

export const translations: Record<Locale, Translations> = {
  ru: {
    nav: {
      about: "Обо мне",
      stack: "Стек",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Richter",
      role: "Game Developer | Full-Stack Engineer",
      roleSubtitle: "Энтузиаст игровых модификаций",
      viewProjects: "Посмотреть проекты",
      getInTouch: "Связаться",
      terminal: {
        languages: {
          javascript: {
            name: "JavaScript",
            description: "Frontend и full-stack разработка, интерактивные интерфейсы и веб-приложения",
          },
          lua: {
            name: "Lua",
            description: "Игровой скриптинг для FiveM и RedM, серверная логика и игровые механики",
          },
          python: {
            name: "Python",
            description: "Backend-сервисы, API, автоматизация процессов и обработка данных",
          },
          typescript: {
            name: "TypeScript",
            description: "Типобезопасная веб-разработка, масштабируемые приложения и React",
          },
        },
      },
    },
    about: {
      title: "Обо мне",
      description: `Работаю с Lua, React и Python, создаю системы для игровых серверов и веб-приложений.

Основное направление — разработка для платформ FiveM и RedM. Использую фреймворки ESX для FiveM и RSG для RedM. Пишу скрипты для игровых механик, системы управления ресурсами, интеграции с веб-интерфейсами. Работаю с базами данных, настраиваю серверную логику и клиентские события.

В веб-разработке использую React и TypeScript для интерфейсов и дашбордов. Python применяю для backend-сервисов, API и автоматизации. Слежу за производительностью кода, стараюсь писать поддерживаемые решения.

Интересуюсь open-source проектами, изучаю новые инструменты и подходы. Участвую в разработке сообществ, делюсь опытом через код и документацию.`,
      philosophy: "Предпочитаю чистую архитектуру, читаемый код и открытое сотрудничество.",
      keyPoints: ["Чистая архитектура", "Сообщество", "Масштабируемость", "Open Source"],
      codeExamples: {
        javascript: `function develop() {
  const principles = [
    "чистая архитектура",
    "читаемый код",
    "сообщество",
    "масштабируемость"
  ];
  
  return build(principles);
}`,
        lua: `function develop()
  local principles = {
    "чистая архитектура",
    "читаемый код",
    "сообщество",
    "масштабируемость"
  }
  
  return build(principles)
end`,
        python: `def develop():
    principles = [
        "чистая архитектура",
        "читаемый код",
        "сообщество",
        "масштабируемость"
    ]
    
    return build(principles)`,
        typescript: `function develop(): Developer {
  const principles: string[] = [
    "чистая архитектура",
    "читаемый код",
    "сообщество",
    "масштабируемость"
  ];
  
  return build(principles);
}`,
      },
    },
    stack: {
      title: "Технологии",
      categories: {
        Languages: "Языки",
        Frameworks: "Фреймворки",
        Platforms: "Платформы",
        Databases: "Базы данных",
        Areas: "Области",
      },
      descriptions: {
        Lua: "Игровой скриптинг и серверная логика",
        Python: "Backend-сервисы и автоматизация",
        JavaScript: "Frontend и full-stack разработка",
        TypeScript: "Типобезопасная веб-разработка",
        React: "Разработка UI и дашбордов",
        Express: "Node.js backend API",
        Flask: "Python веб-сервисы",
        ESX: "Фреймворк для серверов FiveM",
        RSG: "Фреймворк для серверов RedM",
        FiveM: "Мультиплеерная платформа GTA V",
        RedM: "Мультиплеерная платформа Red Dead Redemption 2",
        MySQL: "Управление реляционными базами данных",
        SQLite: "Легковесная встроенная база данных",
        Redis: "Хранилище структур данных в памяти",
        "Game Scripting": "Серверно-клиентские события и игровая логика",
        "Web Development": "RESTful API и дашборды в реальном времени",
        DevOps: "CI/CD и управление серверами",
      },
    },
    projects: {
      title: "Проекты",
      categories: {
        "Game Development": "Игровая разработка",
        "Web Development": "Веб-разработка",
        "Tools & DevOps": "Инструменты и DevOps",
      },
      items: {
        "1": {
          title: "Экономическая система для мультиплеера",
          description: "Распределенная экономическая система для FiveM/RedM с динамическими ценами, межсерверной торговлей и историей транзакций в стиле blockchain.",
        },
        "2": {
          title: "Система управления транспортом",
          description: "Комплексная система транспорта с кастомным тюнингом, симуляцией повреждений, расходом топлива и дашбордом отслеживания в реальном времени.",
        },
        "3": {
          title: "ИИ-система поведения NPC",
          description: "Интеллектуальная система NPC с принятием решений на основе машинного обучения, динамическими диалогами и адаптивной генерацией квестов.",
        },
        "4": {
          title: "Межсерверная прогрессия игроков",
          description: "Единая система прогрессии игроков между серверами с безопасной синхронизацией данных и отслеживанием достижений.",
        },
        "5": {
          title: "Динамическая система погоды",
          description: "Процедурная система погоды с интеграцией реальных данных, сезонными изменениями и оптимизированным рендерингом.",
        },
        "6": {
          title: "Дашборд мониторинга серверов",
          description: "Платформа мониторинга с живыми метриками, системой алертов и аналитикой производительности для игровых серверов.",
        },
        "7": {
          title: "Платформа аналитики игроков",
          description: "Аналитическая платформа с ML-прогнозированием поведения, анализом оттока и персонализированными рекомендациями для игроков.",
        },
        "8": {
          title: "API Gateway микросервисов",
          description: "Масштабируемый API Gateway с ограничением скорости, аутентификацией, балансировкой нагрузки и мониторингом запросов в реальном времени.",
        },
        "9": {
          title: "Система чата WebSocket",
          description: "Чат в реальном времени с шифрованием сообщений, обменом файлами, голосовыми каналами и кроссплатформенной поддержкой.",
        },
        "10": {
          title: "CI/CD пайплайн для игровых серверов",
          description: "Автоматизированный пайплайн развертывания с тестированием, версионированием, возможностью отката и поддержкой нескольких окружений.",
        },
        "11": {
          title: "Инструмент профилирования производительности",
          description: "Инструмент профилирования игровых скриптов с метриками производительности в реальном времени, обнаружением утечек памяти и советами по оптимизации.",
        },
        "12": {
          title: "Фреймворк автоматизированного тестирования",
          description: "Комплексный фреймворк тестирования для игровых скриптов с юнит-тестами, интеграционными тестами и автоматическим регрессионным тестированием.",
        },
      },
    },
    contact: {
      title: "Контакты",
      sendMessage: "Отправить сообщение",
      socialNetworks: "Социальные сети",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "Ваше сообщение...",
      sendButton: "Отправить",
    },
    footer: {
      copyright: "© 2025 Richter — Crafted with TypeScript & Coffee ☕",
    },
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Richter",
      role: "Game Developer | Full-Stack Engineer",
      roleSubtitle: "Game modding enthusiast",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      terminal: {
        languages: {
          javascript: {
            name: "JavaScript",
            description: "Frontend and full-stack development, interactive interfaces and web applications",
          },
          lua: {
            name: "Lua",
            description: "Game scripting for FiveM and RedM, server logic and game mechanics",
          },
          python: {
            name: "Python",
            description: "Backend services, APIs, process automation and data processing",
          },
          typescript: {
            name: "TypeScript",
            description: "Type-safe web development, scalable applications and React",
          },
        },
      },
    },
    about: {
      title: "About",
      description: `Working with Lua, React, and Python, I create systems for game servers and web applications.

Main focus is development for FiveM and RedM platforms. Using ESX framework for FiveM and RSG for RedM. Writing scripts for game mechanics, resource management systems, web interface integrations. Working with databases, configuring server logic and client events.

In web development, I use React and TypeScript for interfaces and dashboards. Python for backend services, APIs, and automation. Paying attention to code performance, trying to write maintainable solutions.

Interested in open-source projects, learning new tools and approaches. Participating in community development, sharing experience through code and documentation.`,
      philosophy: "I prefer clean architecture, readable code, and open collaboration.",
      keyPoints: ["Clean Architecture", "Community", "Scalability", "Open Source"],
      codeExamples: {
        javascript: `function develop() {
  const principles = [
    "clean architecture",
    "readable code",
    "community",
    "scalability"
  ];
  
  return build(principles);
}`,
        lua: `function develop()
  local principles = {
    "clean architecture",
    "readable code",
    "community",
    "scalability"
  }
  
  return build(principles)
end`,
        python: `def develop():
    principles = [
        "clean architecture",
        "readable code",
        "community",
        "scalability"
    ]
    
    return build(principles)`,
        typescript: `function develop(): Developer {
  const principles: string[] = [
    "clean architecture",
    "readable code",
    "community",
    "scalability"
  ];
  
  return build(principles);
}`,
      },
    },
    stack: {
      title: "Technologies",
      categories: {
        Languages: "Languages",
        Frameworks: "Frameworks",
        Platforms: "Platforms",
        Databases: "Databases",
        Areas: "Areas",
      },
      descriptions: {
        Lua: "Game scripting and server-side logic",
        Python: "Backend services and automation",
        JavaScript: "Frontend and full-stack development",
        TypeScript: "Type-safe web development",
        React: "UI development and dashboards",
        Express: "Node.js backend APIs",
        Flask: "Python web services",
        ESX: "FiveM server framework",
        RSG: "RedM server framework",
        FiveM: "GTA V multiplayer platform",
        RedM: "Red Dead Redemption 2 multiplayer platform",
        MySQL: "Relational database management",
        SQLite: "Lightweight embedded database",
        Redis: "In-memory data structure store",
        "Game Scripting": "Server-client events and gameplay logic",
        "Web Development": "RESTful APIs and real-time dashboards",
        DevOps: "CI/CD and server management",
      },
    },
    projects: {
      title: "Projects",
      categories: {
        "Game Development": "Game Development",
        "Web Development": "Web Development",
        "Tools & DevOps": "Tools & DevOps",
      },
      items: {
        "1": {
          title: "Real-time Multiplayer Economy System",
          description: "Distributed economy system for FiveM/RedM with dynamic market prices, cross-server trading, and blockchain-like transaction history.",
        },
        "2": {
          title: "Advanced Vehicle Management System",
          description: "Comprehensive vehicle system with custom tuning, damage simulation, fuel economy, and real-time tracking dashboard.",
        },
        "3": {
          title: "AI-driven NPC Behavior System",
          description: "Intelligent NPC system with machine learning-based decision making, dynamic dialogue, and adaptive quest generation.",
        },
        "4": {
          title: "Cross-server Player Progression",
          description: "Unified player progression system across multiple servers with secure data synchronization and achievement tracking.",
        },
        "5": {
          title: "Dynamic Weather & Environment System",
          description: "Procedural weather system with real-world data integration, seasonal changes, and performance-optimized rendering.",
        },
        "6": {
          title: "Real-time Server Monitoring Dashboard",
          description: "Advanced monitoring platform with live metrics, alerting system, and performance analytics for game servers.",
        },
        "7": {
          title: "Player Analytics Platform",
          description: "ML-powered analytics platform with behavior prediction, churn analysis, and personalized recommendations for players.",
        },
        "8": {
          title: "Microservices API Gateway",
          description: "Scalable API gateway with rate limiting, authentication, load balancing, and real-time request monitoring.",
        },
        "9": {
          title: "WebSocket Live Chat System",
          description: "Real-time chat system with message encryption, file sharing, voice channels, and cross-platform support.",
        },
        "10": {
          title: "CI/CD Pipeline for Game Servers",
          description: "Automated deployment pipeline with testing, versioning, rollback capabilities, and multi-environment support.",
        },
        "11": {
          title: "Performance Profiling Tool",
          description: "Advanced profiling tool for game scripts with real-time performance metrics, memory leak detection, and optimization suggestions.",
        },
        "12": {
          title: "Automated Testing Framework",
          description: "Comprehensive testing framework for game scripts with unit tests, integration tests, and automated regression testing.",
        },
      },
    },
    contact: {
      title: "Contact",
      sendMessage: "Send Message",
      socialNetworks: "Social Networks",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "Your message...",
      sendButton: "Send",
    },
    footer: {
      copyright: "© 2025 Richter — Crafted with TypeScript & Coffee ☕",
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

