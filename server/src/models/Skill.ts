import { Schema, model, type Document } from 'mongoose';
import { SkillType } from './skillTypes';
import Project from './Project';

export interface ISkill extends Document {
  skillName: string;
  skillURL?: string;
  iconURL?: string;
  skillType: SkillType;
  description: string;
  confidenceLevel: number;
  associatedProjects: Schema.Types.ObjectId[];
}

const skillSchema = new Schema<ISkill>(
  {
    skillName: {
      type: String,
      required: true,
    },
    skillURL: { type: String },
    iconURL: { type: String },
    skillType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    confidenceLevel: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    associatedProjects: [Project],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

// Make a virtual to get the skill's earliest learned date through the associated projects

const Skill = model<ISkill>('Skill', skillSchema);

export default Skill;