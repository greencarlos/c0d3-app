import {
  login,
  logout,
  signup,
  isTokenValid
} from '../helpers/controllers/authController'
import {
  createChallenge,
  updateChallenge
} from '../helpers/controllers/challengesController'
import { userInfo } from '../helpers/controllers/userInfoController'
import { addAlert, removeAlert } from '../helpers/controllers/alertController'
import { reqPwReset, changePw } from '../helpers/controllers/passwordController'
import { addComment } from './queryResolvers/addComment'
import {
  createSubmission,
  acceptSubmission,
  rejectSubmission,
  submissions
} from '../helpers/controllers/submissionController'
import { setStar } from '../helpers/controllers/starsController'
import { alerts } from './queryResolvers/alerts'
import { lessons } from './queryResolvers/lessons'
import { session } from './queryResolvers/session'
import { allUsers } from './queryResolvers/allUsers'
import { getLessonMentors } from './queryResolvers/getLessonMentors'
import { changeAdminRights } from '../helpers/controllers/adminController'
import {
  createLesson,
  updateLesson
} from '../helpers/controllers/lessonsController'
import { getPreviousSubmissions } from './queryResolvers/getPreviousSubmissions'
import { deleteComment } from './queryResolvers/deleteComment'
import { addModule, modules, deleteModule } from './queryResolvers/moduleCrud'
import {
  exercises,
  addExercise,
  updateExercise,
  deleteExercise
} from './queryResolvers/exerciseCrud'
export default {
  Query: {
    submissions,
    getLessonMentors,
    allUsers,
    isTokenValid,
    userInfo,
    lessons,
    exercises,
    modules,
    session,
    alerts,
    getPreviousSubmissions
  },

  Mutation: {
    setStar,
    changePw,
    changeAdminRights,
    createSubmission,
    acceptSubmission,
    rejectSubmission,
    createLesson,
    updateLesson,
    addExercise,
    updateExercise,
    deleteExercise,
    login,
    logout,
    signup,
    addAlert,
    removeAlert,
    reqPwReset,
    createChallenge,
    updateChallenge,
    addModule,
    deleteModule,
    addComment,
    deleteComment
  }
}
