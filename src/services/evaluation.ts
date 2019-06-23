import { Service, Inject } from 'typedi';
import { IUser } from '../interfaces/IUser';
import IEvaluation from '../interfaces/IEvaluation';

@Service()
export default class EvaluationService {
  constructor(@Inject('userModel') private userModel) {}

  public async Add(id: string, evaluation: IEvaluation): Promise<IEvaluation> {
    try {
      evaluation.done = false;

      const userRecord = await this.userModel.findByIdAndUpdate(
        id,
        {
          $push: { evaluations: evaluation },
        },
        { new: true },
      );

      if (!userRecord) {
        throw new Error('Could not add evaluation');
      }

      return userRecord.evaluations[userRecord.evaluations.length - 1]; //Get just added evaluation
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async Update(id: string, evaluation: IEvaluation): Promise<IEvaluation> {
    try {
      const userRecord = await this.userModel.findOneAndUpdate(
        {
          _id: id,
          'evaluations._id': evaluation._id,
        },
        {
          $set: {
            'evaluations.$.subject': evaluation.subject,
            'evaluations.$.evaluationType': evaluation.evaluationType,
            'evaluations.$.date': evaluation.date,
            'evaluations.$.urgency': evaluation.urgency,
            'evaluations.$.description': evaluation.description,
            'evaluations.$.done': evaluation.done,
          },
        },
      );

      if (!userRecord) {
        throw new Error('Could not update evaluation');
      }

      return evaluation;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async Delete(id: string, evaluationId: string): Promise<{ user: IUser }> {
    try {
      const userRecord = await this.userModel.findByIdAndUpdate(id, {
        $pull: { evaluations: { _id: evaluationId } },
      });

      if (!userRecord) {
        throw new Error('Could not delete evaluation');
      }

      return userRecord;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
