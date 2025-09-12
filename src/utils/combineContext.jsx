export default function combineContext(...providers){
    /**
     * This combines multiple context providers together and returns a single provider
     */
    return({children})=>{
        return providers.reduceRight((accumulator,CurrentProvider)=>{
            return <CurrentProvider>{accumulator}</CurrentProvider>
        },children /* Initial value*/)
    }
}

/**
 * <A>
    * <B>
    *        <C>
    *               <D>
    *                       {chidren}
    *               </D>
*            </C>
    * </B>
 * </A>
 */

/**
 * returns like this 
 * <Combined>
 * {children}
 * </Combined>
 * 
 */