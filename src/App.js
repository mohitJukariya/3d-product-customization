import './index.css';
import {Suspense, useRef,useState} from'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,useGLTF} from '@react-three/drei'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customisedColors.laces}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customisedColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customisedColors.caps}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customisedColors.inner}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customisedColors.sole}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customisedColors.stripes}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customisedColors.band}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customisedColors.patch}/>
    </group>
  )
}


function App() {

  const [laces,setLaces] = useState("#ffffff")
  const [mesh,setMesh] = useState("#ffffff")
  const [caps,setCaps] = useState("#ffffff")
  const [inner,setInner] = useState("#ffffff")
  const [sole,setSole] = useState("#ffffff")
  const [stripes,setStripes] = useState("#ffffff")
  const [band,setBand] = useState("#ffffff")
  const [patch,setPatch] = useState("#ffffff")

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight/>
                  <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                  <Model customisedColors={{laces:laces, mesh:mesh, caps:caps, inner:inner, sole:sole, stripes:stripes, band:band, patch:patch}}/>
                  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                </Suspense>
              </Canvas>
            </div>
            <h2><strong>Color chooser</strong></h2>
            <div className='row'>
              <div className='colors'>
                <div className="col-md-3 my-3">
                  {/* laces */}
                  <div>
                      <input type="color" id="laces" name="laces"
                            value={laces}
                            onChange={(e) => setLaces(e.target.value)} />
                      <label htmlFor="mesh">Laces</label>
                    </div>
                  {/* mesh */}
                  <div>
                      <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                      <label htmlFor="mesh">Mesh</label>
                  </div>
                </div>
                <div className="col-md-3 my-3">
                  {/* caps */}
                  <div>
                      <input type="color" id="caps" name="caps"
                              value={caps} 
                              onChange={(e) => setCaps(e.target.value)}/>
                      <label htmlFor="caps">Caps</label>
                  </div>
                  {/* inner */}
                  <div>
                      <input type="color" id="inner" name="inner"
                              value={inner} 
                              onChange={(e) => setInner(e.target.value)}/>
                      <label htmlFor="inner">Inner</label>
                  </div>
                </div>
                <div className="col-md-3 my-3">
                  {/* sole */}
                  <div>
                      <input type="color" id="sole" name="sole"
                              value={sole} 
                              onChange={(e) => setSole(e.target.value)}/>
                      <label htmlFor="sole">Sole</label>
                  </div>
                  {/* stripes */}
                  <div>
                      <input type="color" id="stripes" name="stripes"
                              value={stripes} 
                              onChange={(e) => setStripes(e.target.value)}/>
                      <label htmlFor="stripes">Stripes</label>
                  </div>
                </div>
                <div className="col-md-3 my-3">
                  {/* band */}
                  <div>
                      <input type="color" id="band" name="band"
                              value= {band}
                              onChange={(e) => setBand(e.target.value)}/>
                      <label htmlFor="band">Band</label>
                  </div>
                  {/* patch */}
                  <div>
                      <input type="color" id="patch" name="patch"
                              value={patch} 
                              onChange={(e) => setPatch(e.target.value)}/>
                      <label htmlFor="patch">Patch</label>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
  );
}

export default App;
