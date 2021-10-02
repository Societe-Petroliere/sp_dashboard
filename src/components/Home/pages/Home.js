import { Card } from '@material-ui/core';
import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import img1 from "../../assets/images/img1.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img6 from "../../assets/images/img6.png";

export const Home = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
        <div style={{
            width: "70%",
            margin: "auto"
        }}>
            <Card>
                <img alt="depot_img" style={{ width: "100%", height: "550px", margin: "auto" }} src={img3}/>
                <div style={{ width: "95%", margin: "auto" }}>
                    <h2 style={{ color: '#1E92E5' }}>
                        SP Rusororo Fuel Terminal Depot
                    </h2>
                    <p style={{ color: '#1E92E5' }}>
                        Société Petrolière Limited liability private company incorporated in Rwanda for the importation and distribution of petroleum ...
                    </p>
                </div>
            </Card>

        </div>
            <div className="Content"  style={{ width: '90%', margin: '70px auto 0 auto' }}>
                <h2 style={{
                    width: '600px',
                    margin: '25px auto',
                    color: '#1E92E5',
                }}>
                    Inauguration of SP Rusororo Fuel Terminal Depot
                </h2>
                <div className="imgWrapper" style={{ display:'flex' }}>
                    <Card style={{ margin: '20px' }}>
                        <img alt="sample-img" style={{ width: "100%", height: "400px", margin: "auto" }} src={img6}/>
                        <div style={{ width: "95%", margin: "auto" }}>
                            <h2 style={{ color: '#1E92E5' }}>
                                Inauguration of SP Rusororo Fuel Terminal Depot
                            </h2>
                            <p style={{ color: '#1E92E5' }}>
                                Société Petrolière Limited liability private company incorporated in Rwanda for the importation and distribution of petroleum ...
                            </p>
                        </div>
                    </Card>
                    <Card style={{ margin: '20px' }}>
                        <img alt="sample-img" style={{ width: "100%", height: "400px", margin: "auto" }} src={img1}/>
                        <div style={{ width: "95%", margin: "auto" }}>
                            <h2 style={{ color: '#1E92E5' }}>
                                Inauguration of SP Rusororo Fuel Terminal Depot
                            </h2>
                            <p style={{ color: '#1E92E5' }}>
                                Société Petrolière Limited liability private company incorporated in Rwanda for the importation and distribution of petroleum ...
                            </p>
                        </div>
                    </Card>
                    <Card style={{ margin: '20px' }}>
                        <img alt="sample-img" style={{ width: "100%", height: "400px", margin: "auto" }} src={img4}/>
                        <div style={{ width: "95%", margin: "auto" }}>
                            <h2 style={{ color: '#1E92E5' }}>
                                Inauguration of SP Rusororo Fuel Terminal Depot
                            </h2>
                            <p style={{ color: '#1E92E5' }}>
                                Société Petrolière Limited liability private company incorporated in Rwanda for the importation and distribution of petroleum ...
                            </p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat sem in aliquet laoreet. Curabitur consequat gravida mi, nec mattis elit fermentum at. Praesent imperdiet suscipit lorem, vel faucibus lorem pretium ac. Aliquam vitae tellus vitae dui egestas sollicitudin. Praesent congue et risus eu vehicula. Etiam at mattis arcu. Vestibulum a arcu aliquam, ornare odio consectetur, hendrerit turpis. Donec sodales placerat arcu, non tristique arcu efficitur congue.
                Integer imperdiet risus urna, quis tempor eros tincidunt eget. Nullam suscipit pretium ipsum, at placerat quam sodales eu. Cras consectetur dapibus metus, sit amet luctus erat ultricies commodo. Sed non dignissim purus. Praesent venenatis, risus eget cursus accumsan, elit magna pharetra libero, ut suscipit orci metus eget massa. Pellentesque consequat sodales feugiat. Pellentesque nisi elit, viverra id aliquam in, ullamcorper finibus est. Praesent at odio eu nulla tempus ullamcorper vel id massa. Nulla venenatis nibh diam, at pharetra felis egestas eu. Sed gravida nulla arcu, eget rhoncus ipsum volutpat eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aliquam imperdiet leo vitae nunc gravida, eget ornare est interdum. Phasellus tempor metus lacinia sagittis interdum. Vestibulum mollis commodo sapien, vitae tempor neque tincidunt eget. Duis ullamcorper pellentesque magna, in auctor nunc pharetra vehicula. Nam ligula justo, accumsan ut augue ut, tincidunt rhoncus ligula. Maecenas sit amet sollicitudin dolor. Aliquam erat volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat sem in aliquet laoreet. Curabitur consequat gravida mi, nec mattis elit fermentum at. Praesent imperdiet suscipit lorem, vel faucibus lorem pretium ac. Aliquam vitae tellus vitae dui egestas sollicitudin. Praesent congue et risus eu vehicula. Etiam at mattis arcu. Vestibulum a arcu aliquam, ornare odio consectetur, hendrerit turpis. Donec sodales placerat arcu, non tristique arcu efficitur congue.
                Integer imperdiet risus urna, quis tempor eros tincidunt eget. Nullam suscipit pretium ipsum, at placerat quam sodales eu. Cras consectetur dapibus metus, sit amet luctus erat ultricies commodo. Sed non dignissim purus. Praesent venenatis, risus eget cursus accumsan, elit magna pharetra libero, ut suscipit orci metus eget massa. Pellentesque consequat sodales feugiat. Pellentesque nisi elit, viverra id aliquam in, ullamcorper finibus est. Praesent at odio eu nulla tempus ullamcorper vel id massa. Nulla venenatis nibh diam, at pharetra felis egestas eu. Sed gravida nulla arcu, eget rhoncus ipsum volutpat eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aliquam imperdiet leo vitae nunc gravida, eget ornare est interdum. Phasellus tempor metus lacinia sagittis interdum. Vestibulum mollis commodo sapien, vitae tempor neque tincidunt eget. Duis ullamcorper pellentesque magna, in auctor nunc pharetra vehicula. Nam ligula justo, accumsan ut augue ut, tincidunt rhoncus ligula. Maecenas sit amet sollicitudin dolor. Aliquam erat volutpat.
            </p>
            <Card>
                <img  style={{ width: "90%", height: "400px", margin: "auto" }} src={img4}/>
            </Card>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat sem in aliquet laoreet. Curabitur consequat gravida mi, nec mattis elit fermentum at. Praesent imperdiet suscipit lorem, vel faucibus lorem pretium ac. Aliquam vitae tellus vitae dui egestas sollicitudin. Praesent congue et risus eu vehicula. Etiam at mattis arcu. Vestibulum a arcu aliquam, ornare odio consectetur, hendrerit turpis. Donec sodales placerat arcu, non tristique arcu efficitur congue.
                Integer imperdiet risus urna, quis tempor eros tincidunt eget. Nullam suscipit pretium ipsum, at placerat quam sodales eu. Cras consectetur dapibus metus, sit amet luctus erat ultricies commodo. Sed non dignissim purus. Praesent venenatis, risus eget cursus accumsan, elit magna pharetra libero, ut suscipit orci metus eget massa. Pellentesque consequat sodales feugiat. Pellentesque nisi elit, viverra id aliquam in, ullamcorper finibus est. Praesent at odio eu nulla tempus ullamcorper vel id massa. Nulla venenatis nibh diam, at pharetra felis egestas eu. Sed gravida nulla arcu, eget rhoncus ipsum volutpat eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aliquam imperdiet leo vitae nunc gravida, eget ornare est interdum. Phasellus tempor metus lacinia sagittis interdum. Vestibulum mollis commodo sapien, vitae tempor neque tincidunt eget. Duis ullamcorper pellentesque magna, in auctor nunc pharetra vehicula. Nam ligula justo, accumsan ut augue ut, tincidunt rhoncus ligula. Maecenas sit amet sollicitudin dolor. Aliquam erat volutpat.
            </p> */}
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Home;
