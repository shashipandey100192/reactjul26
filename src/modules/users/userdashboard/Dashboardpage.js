import React from 'react'
import Graphpage from './Graphpage'
import Weekly from './Weekly'

function Dashboardpage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-9'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-6 mt-3'>
                                <div className='card p-2'>
                                    <p>sdfhjsdf</p>
                                    <h3>sdfh</h3>
                                </div>
                            </div>
                            <div className='col-md-6 mt-3'>
                                 <div className='card p-2'>
                                    <p>sdfhjsdf</p>
                                    <h3>sdfh</h3>
                                </div>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div className='card p-2'>
                                    <Graphpage/>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4 '>
                        <div className='row'>
                            <div className='col-md-12 mt-3'>
                                 <div className='card p-2'>
                                    <p>sdfhjsdf</p>
                                    <h3>sdfh</h3>
                                     <h3>sdfh</h3>
                                      <h3>sdfh</h3>
                                       <h3>sdfh</h3>

                                </div>
                            </div>
                            <div className='col-md-12 mt-3'>
                                 <div className='card p-2'>
                                    <p>sdfhjsdf</p>
                                    <h3>sdfh</h3>
                                     <h3>sdfh</h3>
                                      <h3>sdfh</h3>
                                       <h3>sdfh</h3>
                                        <h3>sdfh</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                         <div className='card p-2 mt-3'>
                                    <Weekly/>
                                </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                         <div className='card p-2'>
                                    <p>sdfhjsdf</p>
                                    <h3>sdfh</h3>
                                </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='row'>
                    <div className='col-md-12 mt-3'>
                        <div className='card p-2'>
                            <p>sdkfjksdjf</p>
                            <h2>sdjfhjsdf</h2>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                        <div className='card p-2'>
                            <p>sdkfjksdjf</p>
                            <h2>sdjfhjsdf</h2>
                            <h2>sdjfhjsdf</h2>
                            <h2>sdjfhjsdf</h2>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                        <div className='card p-2'>
                            <p>sdkfjksdjf</p>
                            <h2>sdjfhjsdf</h2>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                        <div className='card p-2'>
                            <p>sdkfjksdjf</p>
                            <h2>sdjfhjsdf</h2>
                            <h2>sdjfhjsdf</h2>
                            <h2>sdjfhjsdf</h2>
                            <h2>sdjfhjsdf</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboardpage