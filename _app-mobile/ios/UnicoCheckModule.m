//
//  RNHello.m
//  pocreactnative
//
//  Created by João Victor Vieira Oliveira on 21/06/23.
//

#import "UnicoCheckModule.h"
#import <React/RCTLog.h>
#import "UnicoCheckViewController.h"

@implementation UnicoCheckModule

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}


//RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
//{
//
//  callback(@[@"hello from native ios"]);
//}


RCT_EXTERN_METHOD(callDefaultCamera)
- (void)callDefaultCamera {
  [self openCamera:DEFAULT];
}

RCT_EXTERN_METHOD(callSmartCamera)
- (void)callSmartCamera {
  [self openCamera:SMART];
}

RCT_EXTERN_METHOD(callLivenessCamera)
- (void)callLivenessCamera {
  [self openCamera:LIVENESS];
}

RCT_EXTERN_METHOD(callDocumentFrontCamera)
- (void)callDocumentFrontCamera {
  [self openCamera:DOCUMENT_FRONT];
}

RCT_EXTERN_METHOD(callDocumentBackCamera)
- (void)callDocumentBackCamera {
  [self openCamera:DOCUMENT_BACK];
}

RCT_EXTERN_METHOD(callIdentityFrontCamera)
- (void)callIdentityFrontCamera {
  [self openCamera:IDENTITY_FRONT];
}

RCT_EXTERN_METHOD(callIdentityBackCamera)
- (void)callIdentityBackCamera {
  [self openCamera:IDENTITY_BACK];
}

- (void)openCamera: (CameraMode)cameraMode {

  dispatch_async(dispatch_get_main_queue(), ^{

    UnicoCheckViewController *unicoView = [UnicoCheckViewController new];

    UIViewController *view = [UIApplication sharedApplication].delegate.window.rootViewController;
    unicoView.viewOrigin = view;
    unicoView.mode = cameraMode;
    unicoView.acessoBioModule = self;

    [view presentViewController:unicoView animated:YES completion:nil];

  });
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (void)onSucessCamera: (NSString *)msg {
  if(hasListeners) {
    [self sendEventWithName:@"onSuccess" body:@{@"objResult": msg}];
  }
}

- (void)onErrorCameraFace:(NSString *)error {
  if(hasListeners) {
    [self sendEventWithName:@"onError" body:@{@"objResult": error}];
  }
}

- (void)onErrorAcessoBioManager:(NSString *)error {
  if (hasListeners) {
    [self sendEventWithName:@"onError" body:@{@"objResult": error}];
  }
}

- (void)systemClosedCameraTimeoutFaceInference {
  [self sendEventWithName:@"onError" body:@{@"objResult": @"Timeout de inferencia inteligente de face excedido."}];
}

- (void)systemClosedCameraTimeoutSession {
  [self sendEventWithName:@"onError" body:@{@"objResult": @"Tempo de sessão excedido"}];
}

- (void)userClosedCameraManually {
  if(hasListeners) {
    [self sendEventWithName:@"onError" body:@{@"objResult": @"Usuário fechou a câmera manualmente"}];
  }
}

-(void)showAlert{

  UIAlertController *alert = [UIAlertController new];
  alert.title = @"teste";
  alert.message = @"descriptiuon";

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *view = [UIApplication sharedApplication].delegate.window.rootViewController;
    [view presentViewController:alert animated:YES completion:nil];

  });

}

// MARK: - Supported Events

- (NSArray<NSString *> *)supportedEvents {
  return @[@"onSuccess", @"onError"];
}

@end

