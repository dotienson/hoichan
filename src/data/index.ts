import { Specialty } from './types';
import { urology } from './specialties/urology';
import { rheumatology } from './specialties/rheumatology';
import { pulmonology } from './specialties/pulmonology';
import { orthopaedics } from './specialties/orthopaedics';
import { ophthalmology } from './specialties/ophthalmology';
import { neurology } from './specialties/neurology';
import { nephrology } from './specialties/nephrology';
import { metabolic } from './specialties/metabolic';
import { infectious } from './specialties/infectious';
import { hematology } from './specialties/hematology';
import { gastroenterology } from './specialties/gastroenterology';
import { endocrinology } from './specialties/endocrinology';
import { allergy } from './specialties/allergy';
import { cardiology } from './specialties/cardiology';

export const specialties: Specialty[] = [
  urology,
  rheumatology,
  pulmonology,
  orthopaedics,
  ophthalmology,
  neurology,
  nephrology,
  metabolic,
  infectious,
  hematology,
  gastroenterology,
  endocrinology,
  allergy,
  cardiology
];

export * from './types';
