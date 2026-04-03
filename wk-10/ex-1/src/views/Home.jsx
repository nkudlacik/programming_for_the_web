import LlamaAlpacaPic from '../assets/alpaca-vs-llama.jpg'
export function Home () {
    return (
        <>
            <h1>Which are Better, Llamas or Alpacas?</h1>

            <img src={LlamaAlpacaPic} alt="Alpaca vs Llama" />

            <p>
            Is this the last word in the debate? Have you made a choice? Use the
            navigation to learn more about each one and then you can decide which win: 
            <strong>Llamas</strong> or <strong>Alpacas</strong>
            </p> 
        </>
    )
}