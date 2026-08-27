

/* 
An interface is a type that describes the  members a value must have , without providing any implementation .
*/

// Lets solve a Problem that explain the interface core concept : 

/* 
The delivery contract
Daraz does not own delivery riders. It signs contracts with Pathao, RedX, Steadfast and others. The contract says, in effect:

Whoever you are, you must be able to-
 (1) accept a parcel, 
(2) give me a tracking code, 
(3) tell me the delivery charge for a district.

Daraz does not care how you do any of it. Pathao uses bikes, RedX uses vans, another uses buses. 
The contract only lists what must be possible, never how.

That contract is an interface. A company that signs it implements the interface. 
And because Daraz's software only ever talks to the contract, adding a fifth courier tomorrow requires no change to Daraz's code at all.
*/


interface Deliverable {
  readonly courierName: string;
  accept(parcelId: string): string;
  chargeFor(district: string): number;
}

interface Trackable {
  track(code: string): string;
}

class Pathao implements Deliverable, Trackable {
  readonly courierName = "Pathao";

  accept(parcelId: string): string {
    return `PTH-${parcelId}`;
  }

  chargeFor(district: string): number {
    return district === "Dhaka" ? 60 : 120;
  }

  track(code: string): string {
    return `${code}: on a bike`;
  }
}

class RedX implements Deliverable {
  readonly courierName = "RedX";

  accept(parcelId: string): string {
    return `RDX-${parcelId}`;
  }

  chargeFor(district: string): number {
    return district === "Dhaka" ? 70 : 110;
  }
}

const couriers: Deliverable[] = [new Pathao(), new RedX()];
for (const c of couriers) {
  console.log(c.courierName, c.accept("991"), c.chargeFor("Rangpur"));
}
