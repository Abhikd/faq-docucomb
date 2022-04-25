
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./Faq.css"
import { Link animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Faq() {
    return (
        <div className='main'>
            <div className='main__Heading'>
                <Typography variant='h3' style={{ color: "white" }}>What can we help you with?</Typography>
            </div>
            <Grid
                container
                spacing={5}
                alignItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <Link smooth={true} duration={1000} to="first"> <Card>
                        <CardHeader title="Scanning Documents" />
                        <CardContent>
                            <Typography>Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.</Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Link smooth={true} duration={1000} to="second"> <Card>
                        <CardHeader title="Security" />
                        <CardContent>
                            <Typography>Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.</Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Link smooth={true} duration={1000} to="third"> <Card>
                        <CardHeader title="Web App" />

                        <CardContent>
                            <Typography>Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.</Typography>
                        </CardContent>
                    </Card> </Link>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Link smooth={true} duration={1000} to="fourth"> <Card >
                        <CardHeader title="Help/Contact us" />

                        <CardContent>
                            <Typography>Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.</Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Link>  <Card>
                        <CardHeader title="Lorem Ipsum" />

                        <CardContent>
                            <Typography>Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.</Typography>
                        </CardContent>
                    </Card> </Link>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Link> <Card >
                        <CardHeader title="Lorem Ipsum" />

                        <CardContent>
                            <Typography>Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.</Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
            </Grid>

            <div class="custom-shape-divider-top-1650795425">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>

            <hr className='line__Style'></hr>

            <section className='acc__Style' id="first">
                <div className='typo__Style'>
                    <Typography variant='h4'>Scanning Documents</Typography>
                </div>
                <Accordion>
                    <AccordionSummary>
                        <Typography>How do I scan my documents?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            It’s super simple, just follow the instructions in the Scanning Tips.
                        </Typography>
                    </AccordionDetails>



                </Accordion>


                <Accordion>
                    <AccordionSummary>
                        <Typography>How do I ensure good quality of my scanned documents?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Follow the instructions in the Scanning Tips. Ensure good lighting, lay the document flat, and make sure the image is in focus (not blurry).

                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>Why do I need to save documents as pdfs?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            PDFs are a lot smaller in size compared to images, so it helps us keep the storage costs down. Also, it helps ensure that the storage space isn’t misused.
                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>What will happen if the quality of documents is not good enough?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            If the quality of the document image isn’t good, our algorithms won’t work properly. More simply, we may not be able to auto sort and parse them and you’ll have to manually fill in the info.

                            Also, in case you share these low quality documents with a law firm, employer or govt. Agency etc. there's a high likelihood that they will be rejected for poor quality.


                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>Why can’t I directly scan my documents on DocuComb?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Unfortunately, the Web App doesn’t allow scanning the documents. We are working on a mobile app which would allow you to scan the documents directly from the app in the future.

                        </Typography>
                    </AccordionDetails>



                </Accordion>

            </section>


            <section className='acc__Style' id="second" >
                <div className='typo__Style'>
                    <Typography variant='h4'>Security</Typography>
                </div>
                <Accordion>
                    <AccordionSummary>
                        <Typography>How do I know my documents are safe and secure?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Safety of your documents is our priority. We ensure that only you and no one else can access your account. All data transfer happens on a highly secure connection and the information is broken down into chunks and stored securely on multiple servers with encryption.
                        </Typography>
                    </AccordionDetails>



                </Accordion>


                <Accordion>
                    <AccordionSummary>
                        <Typography>Do you store my personally identifiable information?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Yes, we store personally identifiable information to provide you the services of the DocuComb app. However, this information is never shared with anyone. Infact, even we at  DocuComb can’t view this information.
                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>Is my data shared with anyone?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            No, we will never sell or share your data with anyone. However, please read the privacy policy for more details and some special cases.
                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>Is all my data deleted once I deactivate my account?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            If you choose to cancel/deactivate your account, all your data will be removed. If you decide to restore services, a new account will have to be created.
                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>How secure is document sharing feature?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            It’s the safest way to share documents with someone as the copy of the document isn’t sent via email but rather a link to the secure storage is shared. You can also set permissions for sharing i.e. view only or view and download.

                        </Typography>
                    </AccordionDetails>



                </Accordion>

            </section>


            <section className='acc__Style' id="third">
                <div className='typo__Style'>
                    <Typography variant='h4'>WebApp</Typography>
                </div>
                <Accordion>
                    <AccordionSummary>
                        <Typography>How do I upload my documents?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            After initial sign up and completing user profile setup, you would be automatically directed to the view/upload screen. To upload the documents, simply drag the documents onto the main screen or click the browse button to select the documents which you want to upload.

                        </Typography>
                    </AccordionDetails>



                </Accordion>


                <Accordion>
                    <AccordionSummary>
                        <Typography>Which documents can I upload?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            You can upload any document in pdf format less than 100 mb in size. However, we support a specific set of documents for the automatic organisation and tracking features. The list of documents:

                            <ul>
                                <li>Passport </li>
                                <li>US Visa</li>
                                <li>I-20</li>
                                <li>I-797</li>
                                <li>EAD</li>
                                <li>Drivers Licence</li>
                                <li>EU Visa</li>
                                <li>UK Visa</li>
                                <li>Resume</li>
                                <li>Degree Certificate</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>



                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>What if I am unable to upload the documents?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Make sure the document is in pdf format and is less than 100 mb. Sometimes, the upload can fail due to technical issues. Please retry a few times and if the problem persists, contact us at support@docucomb.com.
                        </Typography>
                    </AccordionDetails>

                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>What if a document type is not detected?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            We automatically detect a specific set of documents which includes Passport, US Visa, I-20, I-797, EAD, Drivers Licence, EU Visa, UK Visa, Resume, Degree Certificate. However if your document type is in the mentioned list of




                            However, if you a upload a document other than the ones listed above

                        </Typography>
                    </AccordionDetails>

                </Accordion>

            </section>

            <section className='acc__Style' id="fourth">
                <div className='typo__Style'>
                    <Typography variant='h4'>Help/Contact us</Typography>
                </div>

                <Accordion>
                    <AccordionSummary>
                        <Typography>How do I contact team DocuComb?</Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet. Cum quas odit 33 commodi ullam ut modi dignissimos in voluptas libero.
                        </Typography>
                    </AccordionDetails>

                </Accordion>

            </section>


        </div>
    )
}

export default Faq