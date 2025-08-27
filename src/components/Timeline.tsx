import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Engineering Intern at <span className="company-name">Gala Capital Partners</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>

            <ul>
              <li>Designed an AWS lakehouse pipeline (S3 → Athena/Glue) with a lax staging layer and typed Parquet “silver” tables.</li>
              <li>Automated daily ELT with EventBridge + Lambda; partitioned by <code>busi_date</code> for scan pruning.</li>
              <li>Built Power BI models via the Athena connector with Incremental Refresh and date-partitioned refresh policies.</li>
              <li>Normalized “checks / items / comps / discounts / voids” and added safe casts/regex cleaning for messy numeric fields.</li>
            </ul>

            <p style={{ marginTop: '8px' }}>
              <strong>Stack:</strong> Python, SQL, AWS (S3, Athena, Glue, Lambda, EventBridge), Parquet, Power BI, Git/GitHub
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
                AI & Machine Learning Instructor at   <span className="company-name">iD Tech</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
            <p>
              Pandas, NumPy, scikit-learn, TensorFlow/Keras, SQL/PostgreSQL, Jupyter/Colab </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2024 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
                Software Development Intern at <span className="company-name">The Dome Fund</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              Full-stack Web Development, Blockchain, Project Management, Microservices
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2023 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
                Full Stack Engineer at <span className="company-name">StarFin Ventures</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Irvine, CA - Remote</h4>
            <p>
              Full-stack Web Development, Data Scientist, Project Management, Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
                Brand Ambassador at <span className="company-name">Education Zone</span>
            </h3>            
            <h4 className="vertical-timeline-element-subtitle">Manama, Bahrain</h4>
            <p>
                Market Leadership, Brand Visibility, Event Organization, Strategic Presentations
            </p>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;