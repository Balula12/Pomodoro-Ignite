import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";

export function Home(){
    const { register, handleSubmit, watch } = useForm ()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task')
    

    return (
        <HomeContainer
        >
            <form onSubmit={handleSubmit(handleNewCycle)}action="">
                <FormContainer>
                <label htmlFor="">Vou trabalhar em</label>
                <TaskInput 
                type='task' 
                list='task-suggestions' 
                placeholder="Dê um nome para o seu projeto"
                {...register('task')}
                />

                <datalist id="task-suggestions">
                    <option value="1"/>
                    <option value="2"/>
                    <option value="3"/>
                    <option value="Potato"/>
                </datalist>

                <label htmlFor="">durante</label>
                <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
            
                />

                <span>minutos.</span>
            </FormContainer>
           
            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:
                </Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer> 

            <StartCountdownButton disabled={!task} type="submit">
                <Play   size={24}/>
                Começar
            </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
