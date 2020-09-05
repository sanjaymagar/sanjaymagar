import React from 'react';
import wc1 from './Images/wc1.jpg';
import wc2 from './Images/wc2.png';
import fishing from './Images/fishing.png';
import book from './Images/book.png';
import interaction from './Images/interaction.png';
import d3js from './Images/d3js.png';
import dogs from './Images/dogs.png';
import dogBreeds from './Images/dog-breeds.png';
import { Link } from '../_ui';

type Project = {
  title: string;
  description: React.ReactNode;
  tools: string[];
  images: string[];
  imageContentStyle?: any;
  link: string;
  category?: string;
};

type Projects = {
  category: string;
  projects: Project[];
};

export const projects: Projects[] = [
  {
    category: 'Development & Data Visualization',
    projects: [
      {
        title: 'Intro to D3.js',
        description: (
          <div>
            <p>
              D3.js is the de facto library for drawing data visualization on
              the web. Unless you are very intimately familiar with the API, you
              probably view it as a monolithic framework, and make charts by
              copy + pasting code from bl.ocks.
            </p>

            <p>
              In this extensive article, I talk about every individual D3.js
              module, and how they factor into your goals. Writing this article
              was really rewarding, since I got to delve into parts of the API
              that I had never looked at before. For example, the{' '}
              <a href='/blog/d3#maps-and-globes'>
                different geographic projections
              </a>{' '}
              and <a href='/blog/d3#drawing-svg-shapes'>polygon methods</a> will
              definitely come in handy in the future!
            </p>
          </div>
        ),
        tools: ['D3.js', 'React.js', 'SVG'],
        images: [d3js],
        imageContentStyle: { backgroundPosition: 'top' },
        link: '/blog/d3',
      },
    ],
  },
  {
    category: 'Development & Data Visualization',
    projects: [
      {
        title: 'Interactive Charts with D3.js',
        description: (
          <div>
            <p>
              This article is the first in a series, showing how to make your
              web charts interactive. It runs through two ways to add a tooltip
              to a histogram, while trying to show how to generalize this
              knowledge to create your own custom interactions.
            </p>

            <p>
              I love experimenting with taking advantage of the web to innovate
              on teaching. I experimented with ways to consistently keep the
              main code to the right of the article, which really helps keep
              changes in context.
            </p>

            <p>
              There are some really interesting bits of code involved in making
              this article - check them out in{' '}
              <Link to='https://github.com/wattenberger/wattenberger-2019'>
                this website's repo
              </Link>
              .
            </p>
          </div>
        ),
        tools: ['D3.js', 'React.js', 'SVG'],
        images: [interaction],
        link: '/blog/d3-interactive-charts',
      },
      {
        title: 'Fullstack D3 and Data Visualization',
        description: (
          <div>
            <p>
              Having spent ten years teaching myself D3.js and designing
              dashboards and data visualizations, I wrote the book that I wish I
              could have read.
            </p>
            <p>
              While most books teach data visualization design <i>or</i>{' '}
              development <i>or</i> theory, my book combines all three while
              walking through practical examples. You'll create your first chart
              by the end of the first chapter -{' '}
              <Link to='http://fullstack.io/fullstack-d3'>
                download the first chapter for free right now
              </Link>
              .
            </p>
          </div>
        ),
        tools: ['D3.js', 'SVG', 'Words'],
        images: [book],
        imageContentStyle: { backgroundPosition: 'bottom' },
        link: 'http://fullstack.io/fullstack-d3',
      },
      {
        title: 'Illegal Foreign Fishing',
        description: (
          <div>
            <p>
              A weekend exploration of fishing in foreign waters - most of the
              work was analyzing a 7 million row dataset!
            </p>
            <p>
              Each circle is a unique profile of a country that illegally fishes
              in other, often poorer, countries’ waters. Data collected by
              Global Fishing Watch which used AIS tracking devices, among other
              data sources, to monitor commercial fishing activity and larger
              boats.
            </p>
          </div>
        ),
        tools: ['SVG', 'D3.js', 'Python'],
        images: [fishing],
        link: '/fishing',
      },
      {
        title: 'Dog Names in NYC',
        description: (
          <div>
            <p>
              I found this great dataset of registered dog names in New York
              City and had to dig in. Did you know that Yorkies are the most
              common NYC dog? Or that a dog named Molly is most likely a Lab
              from Staten Island? Explore for more important dog facts!
            </p>
          </div>
        ),
        tools: ['d3.js', 'SVG'],
        images: [dogs],
        imageContentStyle: { backgroundPosition: 'top' },
        link: '/dogs',
      },
      {
        title: 'Dog Breeds',
        description: (
          <div>
            <p>
              I found another great doggy dataset of breed popularity over time
              from the American Kennel Club. This chart was an experiment to
              test out a new kind of tooltip that scrolls a list - check it out
              and tell me what you think!
            </p>
          </div>
        ),
        tools: ['d3.js', 'SVG'],
        images: [dogBreeds],
        imageContentStyle: { backgroundPosition: 'bottom' },
        link: '/dog-breeds',
      },
      {
        title: 'Weather Circle',
        description: (
          <div>
            <p>
              After Umbel moved into its new office in the old Power Plant, we
              wanted to make a great first impression with our entrance screens.
              I wanted to build an interface that keeps visitors and employees
              informed about the weather, especially useful for planning the
              best bike ride home.
            </p>
            <p>
              I built a standalone web app that pulls current weather data from
              the{' '}
              <a href='https://developer.forecast.io/'>Dark Sky Forecast API</a>{' '}
              and displays today's temperature, precipitation, and sunset
              forecast. A clock-like layout keeps the interface familiar and
              easy to understand.
            </p>
          </div>
        ),
        tools: ['Angular', 'D3.js', 'Dark Sky Forecast API'],
        link: '/',
        images: [wc1, wc2],
      },
    ],
  },
];
