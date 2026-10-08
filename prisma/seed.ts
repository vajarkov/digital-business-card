import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Вадим Жарков',

      description:
        'Software Engineer с большим опытом разработки backend и fullstack-приложений, работы с базами данных, Linux и промышленными системами автоматизации.',

      githubUrl: 'https://github.com/vajarkov',

      linkedinUrl:
        'https://www.linkedin.com/in/%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC-%D0%B6%D0%B0%D1%80%D0%BA%D0%BE%D0%B2-b89a0a34/',

      skills: {
        create: [
          { title: 'C#' },
          { title: 'SQL' },
          { title: 'MS SQL Server' },
          { title: 'Linux' },
          { title: 'Oracle' },
          { title: 'MySQL' },
          { title: 'ASP.NET' },
          { title: 'ASP.NET Core' },
          { title: 'Node.js' },
          { title: 'JavaScript' },
          { title: 'Vue.js' },
          { title: 'Docker' },
          { title: 'Python' },
          { title: 'C++' },
          { title: 'Flutter' },
        ],
      },

      experiences: {
        create: [
          {
            company: 'Мединформ',
            position: 'Ведущий программист',
            period: '2024–2026',
            achievements:
              'Сопровождение существующих систем на Silverlight и развитие систем на ASP.NET Core. Разработка и доработка функциональности, работа с MSSQL и API. Участие в развитии системы учёта пациентов с туберкулёзом.',
          },
          {
            company: 'Ваш Домофон',
            position: 'Программист',
            period: '2020–2024',
            achievements:
              'Разработка и сопровождение внутренней CRM-системы. Разработка backend на Yii и Node.js, web-интерфейса на Vue.js и мобильного приложения на Flutter. Работа с MySQL и MongoDB, контейнеризация компонентов системы с помощью Docker.',
          },
          {
            company: 'Автоматизация и Технология Сервис',
            position: 'Программист АСУТП',
            period: '2017–2019',
            achievements:
              'Разработка промышленных систем автоматизации в Automation Studio для контроллеров B&R. Использование языков IEC 61131-3, C/C++ и Automation Basic, а также сопровождение связанных информационных систем.',
          },

          {
            company: 'АО ЕЭК',
            position: 'Программист АСУТП',
            period: '2014–2016',
            achievements:
              'Сопровождение и развитие систем автоматизации технологических процессов. Разработка .NET-сервиса для передачи данных системы на корпоративный портал, администрирование Unix/Linux-систем, доработка системы мониторинга технологических параметров на Java Spring.',
          },

          {
            company: 'EPAM Systems',
            position: 'Разработчик ПО',
            period: '2013–2014',
            achievements:
              'Разработка и сопровождение инфраструктуры Oracle BI и отчётности. Работа с Oracle Database и Linux, сопровождение Java и APEX-приложений, работа с Oracle BI Publisher.',
          },

          

          
        ],
      },

      projects: {
        create: [
          {
            name: 'Digital Business Card',
            url: 'https://github.com/vajarkov/digital-business-card',
          },

          {
            name: 'Engineering Test',
            url: 'https://github.com/vajarkov/eng-test',
          },
        ],
      },
    },
  });

  console.log('Seed completed successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });