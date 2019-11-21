import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
 
  firedata = firebase.database().ref('/users/students/details');
  persona = firebase.database().ref('/users/students/personalities');
  us = firebase.database().ref('/users/students/skills');
  uo = firebase.database().ref('users/students/obstacles');
  ue = firebase.database().ref('users/students/exposures');
  ub = firebase.database().ref('users/students/behaviours')
  alum = firebase.database().ref('/users/orienting');
  tra = firebase.database().ref('/users/orienting')
  vis = firebase.database().ref('/users/students/vision');
  go = firebase.database().ref('/users/students/goal');
  fb = firebase.database().ref('/users/students/activity1fb')
  fb1 = firebase.database().ref('/users/students/activity2fb')
  orienting = firebase.database().ref('/users/orienting')
  bd1 = firebase.database().ref('users/students/behaviour1data')
  bd2 = firebase.database().ref('users/students/behaviour2data')
  bd3 = firebase.database().ref('users/students/behaviour3data')
  constructor(public afireauth: AngularFireAuth) {
  }

  adduser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: newuser.displayName,
          photoURL: ''
        }).then(() => {
          this.firedata.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: newuser.displayName,
            fname: newuser.fname,
            lname: newuser.lname,
            colname: newuser.colname,
            cname: newuser.cname,
            photoURL: ''
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  addalumni(alumni) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(alumni.email, alumni.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: alumni.displayName,
          photoURL: ''
        }).then(() => {
          this.alum.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: alumni.displayName,
            //fname: alumni.fname,
            //lname: alumni.lname,
           aldes: alumni.aldes,
            alskill: alumni.alskill,
            photoURL: ''
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

 

  addtrainer(trainers) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(trainers.email, trainers.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: trainers.displayName,
          photoURL: ''
        }).then(() => {
          this.tra.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: trainers.displayName,
           // fname: alumni.fname,
            //lname: alumni.lname,
            des: trainers.des,
            spl: trainers.spl,
            photoURL: ''
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }
  updateuser(currentuser){
    this.persona.child(this.afireauth.auth.currentUser.uid).set({
      uid:this.afireauth.auth.currentUser.uid,
      p1:currentuser.p1,
      p2:currentuser.p2,
      p3:currentuser.p3,
    })
  }

  userskill(uskill){
    this.us.child(this.afireauth.auth.currentUser.uid).set({
      uid:this.afireauth.auth.currentUser.uid,
     skill1:uskill.skill1,
     skill2:uskill.skill2,
     skill3:uskill.skill3,
    })
  }

  userobstacle(uobs){
    this.uo.child(this.afireauth.auth.currentUser.uid).set({
      uid:this.afireauth.auth.currentUser.uid,
      obstacle1:uobs.obstacle1,
      obstacle2:uobs.obstacle2,
      obstacle3:uobs.obstacle3,
    })

  }

  userexposure(uex){
    this.ue.child(this.afireauth.auth.currentUser.uid).set({
      uid:this.afireauth.auth.currentUser.uid,
      exposure1:uex.exposure1,
      exposure2:uex.exposure2,
      exposure3:uex.exposure3,
    })
  }

  userbehaviour(ube){
  this.ub.child(this.afireauth.auth.currentUser.uid).set({
    uid:this.afireauth.auth.currentUser.uid,
    behaviour1:ube.behaviour1,
    behaviour2:ube.behaviour2,
    behaviour3:ube.behaviour3,
  })

  }

  uservision(uvis){
    this.vis.child(this.afireauth.auth.currentUser.uid).set({
      uid:this.afireauth.auth.currentUser.uid,
     vision:uvis.vision,
    })
  }

    usergoal(ugo){
      this.go.child(this.afireauth.auth.currentUser.uid).set({
        uid:this.afireauth.auth.currentUser.uid,
        goal:ugo.goal,
      })
    
      }
      userfb(ufb){
        this.fb.child(this.afireauth.auth.currentUser.uid).set({
          uid:this.afireauth.auth.currentUser.uid,
         feedback:ufb.feedback,
        })
      }

      userfb1(ufb1){
        this.fb1.child(this.afireauth.auth.currentUser.uid).set({
          uid:this.afireauth.auth.currentUser.uid,
         feedback:ufb1.feedback,
        })
      }
  
    


  passwordreset(email) {
    var promise = new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        resolve({ success: true });
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
        this.afireauth.auth.currentUser.updateProfile({
            displayName: this.afireauth.auth.currentUser.displayName,
            photoURL: imageurl      
        }).then(() => {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
            displayName: this.afireauth.auth.currentUser.displayName,
            photoURL: imageurl,
            uid: firebase.auth().currentUser.uid
            }).then(() => {
                resolve({ success: true });
                }).catch((err) => {
                    reject(err);
                })
        }).catch((err) => {
              reject(err);
           })  
    })
    return promise;
}

updatedisplayname(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
      displayName: newname,
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.alum.child(firebase.auth().currentUser.uid).update({
      displayName: newname,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatename(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
      displayName: '',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      fname: newname,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatedispname(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
      displayName: newname,
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.tra.child(firebase.auth().currentUser.uid).update({
      displayName: newname,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatedes(newdes) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName:'',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.alum.child(firebase.auth().currentUser.uid).update({
      aldes: newdes,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}


updatecol(newdes) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName:'',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      colname: newdes,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatdes(newdes) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName:'',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.tra.child(firebase.auth().currentUser.uid).update({
      des: newdes,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updateskills(newskill) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName: '',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.alum.child(firebase.auth().currentUser.uid).update({
      alskill: newskill,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatskills(newskill) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName: '',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.tra.child(firebase.auth().currentUser.uid).update({
      spl: newskill,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

updatecourse(newskill) {
  var promise = new Promise((resolve, reject) => {
    this.afireauth.auth.currentUser.updateProfile({
    displayName: '',
    photoURL: this.afireauth.auth.currentUser.photoURL
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      cname: newskill,
      photoURL: this.afireauth.auth.currentUser.photoURL,
      uid: this.afireauth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}


getuserdetails() {
  var promise = new Promise((resolve, reject) => {
  this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

getalumnidetails() {
  var promise = new Promise((resolve, reject) => {
  this.alum.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

gettrainerdetails() {
  var promise = new Promise((resolve, reject) => {
  this.tra.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

skilldetails() {
  var promise = new Promise((resolve, reject) => {
  this.us.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}


obstacledetails() {
  var promise = new Promise((resolve, reject) => {
  this.uo.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

exposuredetails() {
  var promise = new Promise((resolve, reject) => {
  this.ue.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

behaviourdetails() {
  var promise = new Promise((resolve, reject) => {
  this.ub.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

goaldetails() {
  var promise = new Promise((resolve, reject) => {
  this.go.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

visiondetails() {
  var promise = new Promise((resolve, reject) => {
  this.vis.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}


getallusers() {
  var promise = new Promise((resolve, reject) => {
    this.firedata.orderByChild('uid').once('value', (snapshot) => {
      let userdata = snapshot.val();
      let temparr = [];
      for (var key in userdata) {
        temparr.push(userdata[key]);
      }
      resolve(temparr);
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}

getusers() {
  var promise = new Promise((resolve, reject) => {
    this.orienting.orderByChild('uid').once('value', (snapshot) => {
      let userdata = snapshot.val();
      let temparr = [];
      for (var key in userdata) {
        temparr.push(userdata[key]);
      }
      resolve(temparr);
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}

b1data(b1d){
  
    this.bd1.child(this.afireauth.auth.currentUser.uid).set({
      uid:this.afireauth.auth.currentUser.uid,
      message1:b1d.message1,
      startdate1:b1d.startdate1,
      enddate1:b1d.enddate1,
      day1:b1d.day1,
      week1:b1d.week1,
      month1:b1d.month1,
      frequency1:b1d.frequency1,
    })

}

b2data(b2d){
  
  this.bd2.child(this.afireauth.auth.currentUser.uid).set({
    uid:this.afireauth.auth.currentUser.uid,
    message2:b2d.message2,
    startdate2:b2d.startdate2,
    enddate2:b2d.enddate2,
    day2:b2d.day2,
    week2:b2d.week2,
    month2:b2d.month2,
    frequency2:b2d.frequency2,
  })

}

b3data(b3d){
  
  this.bd3.child(this.afireauth.auth.currentUser.uid).set({
    uid:this.afireauth.auth.currentUser.uid,
    message3:b3d.message3,
    startdate3:b3d.startdate3,
    enddate3:b3d.enddate3,
    day3:b3d.day3,
    week3:b3d.week3,
    month3:b3d.month3,
    frequency3:b3d.frequency3,
  })

}

b1det() {
  var promise = new Promise((resolve, reject) => {
  this.bd1.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

b2det() {
  var promise = new Promise((resolve, reject) => {
  this.bd2.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

b3det() {
  var promise = new Promise((resolve, reject) => {
  this.bd3.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}

personalities() {
  var promise = new Promise((resolve, reject) => {
  this.persona.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}
}