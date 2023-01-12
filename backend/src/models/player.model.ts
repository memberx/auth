import {
    DocumentType,
    getModelForClass,
    index,
    modelOptions,
    pre,
    prop,
  } from '@typegoose/typegoose';
  import bcrypt from 'bcryptjs';
  
  @modelOptions({
    schemaOptions: {
      // Add createdAt and updatedAt fields
      timestamps: true,
    },
  })
  
  // Export the User class to be used as TypeScript type
  export class Player {
    @prop()
    name: string;
  
    // Instance method to check if passwords match
    async comparePasswords(hashedPassword: string, candidatePassword: string) {
      return await bcrypt.compare(candidatePassword, hashedPassword);
    }
  }
  
  // Create the user model from the User class
  const playerModel = getModelForClass(Player);
  export default playerModel;
  