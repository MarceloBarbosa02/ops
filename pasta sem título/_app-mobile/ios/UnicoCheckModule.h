//
//  RNHello.h
//  pocreactnative
//
//  Created by João Victor Vieira Oliveira on 21/06/23.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

typedef NS_ENUM(NSInteger, CameraMode) {
  DEFAULT,
  SMART,
  LIVENESS,
  DOCUMENT_FRONT,
  DOCUMENT_BACK,
  IDENTITY_FRONT,
  IDENTITY_BACK
};

@interface UnicoCheckModule : RCTEventEmitter <RCTBridgeModule> {
  bool hasListeners;
}

- (void)onSucessCamera: (NSString *)msg;
- (void)onErrorCameraFace:(NSString *)error;
- (void)onErrorAcessoBioManager:(NSString *)error;
- (void)systemClosedCameraTimeoutFaceInference;
- (void)systemClosedCameraTimeoutSession;
- (void)userClosedCameraManually;

@end