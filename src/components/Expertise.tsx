import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Web/Full‑stack
const labelsFirst = [
  "NodeJS",
  "ReactJS",
  "NextJS",
  "Redux",
  "ExpressJS",
  "Docker Compose",
  "RESTful APIs",
  "GraphQL",
  "NextAuth",
  "Prisma",
  "GitHub Actions",
  "GitLab",
  "CI/CD",
  "Agile",
  "Scrum",
  "JavaScript",
  "TypeScript",
  "Python",
  "Spring Boot",
  "ASP.NET",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "AWS (EC2 / S3 / CloudFront)",
  "Vercel",
  "Nginx",
];

// Data Engineering & BI (Athena/Power BI + Snowflake option)
const labelsSecond = [
  // AWS Lakehouse
  "Amazon S3",
  "AWS Glue Catalog",
  "AWS Glue Crawler",
  "AWS Athena (Presto/Trino)",
  "Partition Projection",
  "EventBridge",
  "AWS Lambda",
  "CloudWatch",
  "IAM",
  // File formats / tables
  "Parquet",
  "Apache Iceberg",
  // Modeling & Orchestration
  "dbt (Athena/Snowflake)",
  "Apache Airflow",
  "CTAS / INSERT-SELECT",
  // BI
  "Power BI (Athena connector)",
  // Alt warehouse (when used)
  "Snowflake",
];

// Data Science & AI
const labelsThird = [
  "Python",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Matplotlib",
  "TensorFlow/Keras",
  "PyTorch",
  "Jupyter/Colab",
  "SQL",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Full‑stack Web */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <h3>Full‑Stack Web Development</h3>
            <p>
              Built production web apps end‑to‑end with modern React/Next.js front‑ends and Node/Express back‑ends.
              Strong SDLC ownership across design, implementation, testing, and deployment.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Data Engineering & BI */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <h3>Data Engineering &amp; BI (AWS + Power BI)</h3>
            <p>
              Designed AWS lakehouse pipelines (S3 → Athena/Glue) with a lax staging layer and typed Parquet/Iceberg
              tables, automated daily ETL with EventBridge + Lambda, and delivered Power BI models with incremental
              refresh and partition pruning on <code>busi_date</code>.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Data Science & AI */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x"/>
            <h3>Data Science &amp; AI</h3>
            <p>
              Practical ML for analytics and prototypes: feature engineering, classical models, and deep learning
              workflows to extract insights and build data‑driven products.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
