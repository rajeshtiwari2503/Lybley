import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "../footer/footer.module.css"
 

const Faqs = () => {
  return (
    <>
  
      <div className="container">
        <div className={`${style.faqsHead}`}>
        {/* <div className='mt-5' >
            <h1 className='mt-3 fw-bold'>Frequently Asked Question (FAQs) </h1>
            </div> */}
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: What is a home warranty?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  A home warranty is a service contract that covers the repair or replacement of major home systems and appliances due to normal wear and tear. It provides homeowners with peace of mind by offering financial protection against unexpected breakdowns.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: What does Lybley.com offer?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  Lybley.com offers comprehensive home warranty plans that cover a wide range of appliances, systems, and major components in your home. Our plans provide protection against costly repairs and replacements.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q:  What is covered under Lybley.com's home warranty plans?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  Our home warranty plans cover items such as HVAC systems, electrical systems, plumbing, kitchen appliances, water heaters, and more. For a detailed list of coverage, please refer to our website or plan documentation.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: How do I submit a service request?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A: You can easily submit a service request through our website or mobile app. Log in to your account, provide details about the issue, and our team will promptly dispatch a qualified technician to assist you.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: Are there any limitations or exclusions to the coverage?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  While our plans cover a wide range of items, there may be certain limitations and exclusions. These can vary based on the plan you choose. It's important to review the plan details and terms to understand coverage specifics.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: How quickly will my service request be addressed?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                We pride ourselves on delivering prompt service. Typically, service requests are addressed within [timeframe]. Urgent issues are prioritized, ensuring you receive timely assistance.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: Do I need to pay a service fee when a technician visits?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  Yes, a service fee is applicable for each service request. This fee helps cover the cost of dispatching qualified technicians to your home. The fee amount varies based on your plan and location.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: Can I choose my own repair technician?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A: While we have a network of qualified technicians, you can request a specific technician if you have a preferred service provider. However, we encourage you to use our network for reliable and efficient service.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: How do I renew my home warranty plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A: Renewing your home warranty plan is easy. You will receive renewal information prior to the expiration date. Simply follow the instructions provided to continue enjoying uninterrupted coverage.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q:  What if I want to cancel my home warranty plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  If you wish to cancel your plan, please contact our customer support team. Keep in mind that cancellation terms may vary based on the plan you've chosen.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q:  Do you offer plans for real estate professionals and property managers?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  Yes, we offer specialized plans for real estate professionals and property managers. These plans provide added value and protection for your clients or tenants.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className='mt-5'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Q: How do I contact Lybley.com's customer support?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A:  You can reach our customer support team through phone, email, or live chat on our website. We're here to assist you with any inquiries or concerns.
                  For more detailed information about our home warranty plans, coverage, and services, please visit our website or contact our customer support team.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default Faqs;