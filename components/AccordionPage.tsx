import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
export default function AccordionPage() {
  const accordionData =[
    {
      eventKey:'0',
      title:'iOS Developer',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
    {
      eventKey:'1',
      title:'React native Developer',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
    {
      eventKey:'2',
      title:'Node JS Developer',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
    {
      eventKey:'3',
      title:'Quality Analyst',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
    {
      eventKey:'4',
      title:'Business Development Executive',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
    {
      eventKey:'5',
      title:'Trainee - Quality Analyst',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
    {
      eventKey:'6',
      title:'Trainee - Back End Development(Node.Js, Php)',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    },
  ]
  return (
    <section className=" accordionPage">
      <Accordion className="accordion" id="accordionExample" defaultActiveKey="0" flush>
      {accordionData.map((item)=>(
      <Accordion.Item eventKey={item.eventKey} className="accordion-item">
        <Accordion.Header className="accordion-header">{item.title} <span className="type">{item.type}</span></Accordion.Header>
        <Accordion.Body>
          {item.content}
        </Accordion.Body>
      </Accordion.Item>
      ))}
      
    </Accordion>
    </section>
  )
}
