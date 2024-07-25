import './button.css'

export default function Button({ nome, cor }){;
    let colorButton = cor 

    if(colorButton === 'white'){
        colorButton = 'white'
    }
    else if(colorButton === 'yellow'){
        colorButton = 'yellow'
    }
    else{
        colorButton = 'baseButton'
    }
    return(
        <>
            <a className={colorButton}>{nome}</a>
        </>
    )
}
