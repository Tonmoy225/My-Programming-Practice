/* 
Problem 9 — Bank Transaction Processor
Concepts: union types, discriminated unions, type narrowing, object types, return types, conditional logic
Function name must be: processTransaction
Scenario
A banking application needs to process deposits and withdrawals. Every transaction contains a type and an amount.
Deposit
{
    type: "deposit",
    amount: 2000
}
Withdrawal
{
    type: "withdraw",
    amount: 1500
}
Task
Create a function named processTransaction. It should receive the current account balance and a transaction, and return the new balance.
Rules
A deposit increases the balance.
A withdrawal decreases the balance.
A customer cannot withdraw more money than they currently have — in that case, the original balance should remain unchanged.
TypeScript Requirement
Represent the two possible transaction shapes using TypeScript's type system. The function should not accept arbitrary transaction types.
Starter Code
// TODO: define types for Deposit and Withdrawal transactions
 
function processTransaction(balance: <type>, transaction: Deposit | Withdrawal): <type> {
 
    // write your code here
 
}

*/




type Transaction = {
    type: "deposit" | "withdraw"
    amount: number
}


const processTransaction = (balance:number, transaction:Transaction):number|string => {
     if(transaction.type === "deposit") {
         return balance + transaction.amount
     }
     

     if(transaction.type === "withdraw") {
        if(transaction.amount > balance) {
            return "Insufficient balance"
        }
     }


     return balance - transaction.amount

    
}

console.log(processTransaction(5000, { type: "withdraw", amount: 6000 }))