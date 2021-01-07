import { CategoryModel } from './category.interface';
import { ApprovalStatus, TournamentType } from './enum.interface';

export interface TournamentModel {
  _id?: string;
  name: string;
  category: CategoryModel;
  tournamentType: TournamentType;
  participants: string[];
  waitingList: string[];
  ageRage: number[];
  subDistrict: string;
  registerModel: string;
  prizePool: PrizePoolTournament;
  createdBy: string;
}

export interface ApprovalTournament {
  userId?: string;
  teamId?: string;
  approval: string;
}

export interface CreateTournament {
  name: string;
  category: string;
  tournamentType: TournamentType;
  ageRange: number[];
  prizePool: PrizePoolTournament;
  rule: string;
  permalink: string;

}

export interface PrizePoolTournament {
  firstPrize: number;
  secondPrize: number;
  thirdPrize: number;
}
