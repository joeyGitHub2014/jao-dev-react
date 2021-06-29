import Project from './Project'
import ImagesLoaded from 'react-images-loaded';
import { useState,  useEffect } from 'react'
import Isotope from 'isotope-layout'

const Projects = ({imageNames, isLoading}) => {
    // state for storing the isotope object, with an initial value of null
    // state for storing the filter keyword, with an initial value of *, which matches everything
    const [filterKey, setFilterKey] = useState('*')
    const [isotope, setIsotope] = useState(null);

     useEffect(() => {
        // sanity check
        console.log('isotope -->' + isotope)

        if (isotope) {
             filterKey === '*' ? isotope.arrange({ filter: `*` }) : isotope.arrange({ filter: `.${filterKey}` })
        }
    }, [isotope, filterKey]);
 
    useEffect(() => {
        if(!isLoading) {
           setIsotope(
            new Isotope('.filter-container', {// filter-container: className of the parent of the isotope elements
              itemSelector: '.filter-item', // filter-item: className of the isotope elements
              layoutMode: 'masonry',          // for horizontal isotope
            })
          )
          isotope.layout()
        }
    }, [ isLoading])
    const handleOnAlways = (instance) => {
        console.log('ALWAYS - all images have been loaded')
        if(isotope) {
            isotope.layout();
        }
    };

    const handleOnProgress = (instance, image) => {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log('image is ' + result + ' for ' + image.img.src)

    };

    const handleOnFail = instance => { console.log('FAILING') }

    const handleDone = instance => {

        console.log('DONE LOADING')
        if(isotope){
            isotope.layout();
        }
    };
     return (isLoading && isotope === null) ? (<h1> Loading ...</h1>) : (
        <div>
            <span >
                <button className="button4" style={{ backgroundColor: "#9a4ef1" }} onClick={() => setFilterKey('*')}> All </button>
                <button className="button4" style={{ backgroundColor: "#9a4ef1" }} onClick={() => setFilterKey('php')}> PHP</button>
                <button className="button4" style={{ backgroundColor: "#9a4ef1" }} onClick={() => setFilterKey('js')}> JavaScript</button>
                <button className="button4" style={{ backgroundColor: "#9a4ef1" }} onClick={() => setFilterKey('html')}> html</button>
                <button className="button4" style={{ backgroundColor: "#9a4ef1" }} onClick={() => setFilterKey('laravel')}> Laravel</button>
                <button className="button4" style={{ backgroundColor: "#9a4ef1" }} onClick={() => setFilterKey('react')}> REACT</button>
            </span>
            <ImagesLoaded
                elementType={'div'} // defaults to 'div'
                className={'filter-container'} // defaults to 'images-loaded-container'
                onAlways={handleOnAlways}
                onProgress={handleOnProgress}
                onFail={handleOnFail}
                done={handleDone}
            >   
                {imageNames.map((name) => (
                    <Project key= {name.id} name = {name} />
                ))}
            </ImagesLoaded>
        </div>
    )
}

export default Projects
