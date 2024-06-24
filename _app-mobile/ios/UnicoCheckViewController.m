//
//  AcessoBioViewController.m
//  AcessoBioReactNative
//
//  Created by Matheus Domingos on 13/07/21.
//

#import "UnicoCheckViewController.h"
#import "UnicoCheckModule.h"
#import <AcessoBio/AcessoBio-Swift.h>
#import "UnicoTheme.h"
#import "UnicoConfig.h"
#import "UnicoConfigLiveness.h"

@interface UnicoCheckViewController ()

@property (nonatomic, strong) NSString *jsonFileName;
@property enum DocumentEnums *typeDoc;

@end

@implementation UnicoCheckViewController

//documentType = DocumentRGFrente;

- (void)viewDidLoad {
  [super viewDidLoad];

  self.jsonFileName = @"";
  self.typeDoc = DocumentRGFrente;

  unicoCheck = [[AcessoBioManager alloc] initWithViewController:self];
  // [unicoCheck setTheme:[[UnicoTheme alloc] init]];

  switch (_mode) {
    case DEFAULT:
      [self performSelector:@selector(callDefaultCamera) withObject:nil afterDelay:0.5];
      break;
    case SMART:
      [self performSelector:@selector(callSmartCamera) withObject:nil afterDelay:0.5];
      break;
    case LIVENESS:
      [self performSelector:@selector(callLivenessCamera) withObject:nil afterDelay:0.5];
      break;
    case DOCUMENT_FRONT:
      [self performSelector:@selector(callDocumentFrontCamera)    withObject:nil afterDelay:0.5];
      break;
    case DOCUMENT_BACK:
      [self performSelector:@selector(callDocumentBackCamera) withObject:nil afterDelay:0.5];
      break;
    case IDENTITY_FRONT:
      [self performSelector:@selector(callIdentityFrontCamera)    withObject:nil afterDelay:0.5];
      break;
    case IDENTITY_BACK:
      [self performSelector:@selector(callIdentityBackCamera) withObject:nil afterDelay:0.5];
      break;
  }
}

- (void)callDefaultCamera {
  [unicoCheck setSmartFrame:false];
  [unicoCheck setAutoCapture:false];
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareSelfieCamera:self config: [UnicoConfig new]];
}

- (void)callSmartCamera {
  [unicoCheck setSmartFrame:true];
  [unicoCheck setAutoCapture:true];
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareSelfieCamera:self config: [UnicoConfig new]];
}

- (void)callLivenessCamera {
  NSLog(@"callLivenessCamera");
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareSelfieCamera:self config: [UnicoConfigLiveness new]];
}

- (void)callDocumentFrontCamera {
  NSLog(@"callDocumentFrontCamera");
  self.typeDoc = DocumentCNHFrente;
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareDocumentCamera:self config: [UnicoConfig new]];
}

- (void)callDocumentBackCamera {
  NSLog(@"callDocumentBackCamera");
  self.typeDoc = DocumentCNHVerso;
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareDocumentCamera:self config: [UnicoConfig new]];
}

- (void)callIdentityFrontCamera {
  NSLog(@"callIdentityFrontCamera");
  self.typeDoc = DocumentRGFrente;
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareDocumentCamera:self config: [UnicoConfig new]];
}

- (void)callIdentityBackCamera {
  NSLog(@"callIdentityBackCamera");
  self.typeDoc = DocumentRGVerso;
  [unicoCheck setTheme: [UnicoTheme new]];
  [[unicoCheck build] prepareDocumentCamera:self config: [UnicoConfig new]];
}

- (void)onErrorAcessoBioManager:(NSString *)error {
  [self.acessoBioModule onErrorAcessoBioManager:error];
  [self sair];
}

- (void)onCameraReady:(id)cameraOpener {
  [cameraOpener open:self];
}

-(void)onCameraReadyDocument:(id<AcessoBioCameraOpenerDelegate>)cameraOpener  {
  NSLog(@"onCameraReadyDocument");
  [cameraOpener openDocument:(DocumentEnums)self.typeDoc delegate:self];
}

- (void)onCameraFailedDocument:(ErrorBio *)message{
  NSLog(@"onCameraFailedDocument");
  NSLog(@"%@", message.desc);
}

- (void)onCameraFailed:(ErrorBio *)message {
  NSLog(@"onCameraFailed");
  NSLog(@"%@", message.desc);
  [self sair];
}

- (void)onSuccessSelfie:(SelfieResult *)result {
  [self.acessoBioModule onSucessCamera:result.base64];
  [self.acessoBioModule onSucessCamera:result.encrypted];
  [self sair];
}

- (void)onErrorSelfie:(ErrorBio *)errorBio {
  NSLog(@"onErrorSelfie");
  NSLog(@"%@", errorBio.desc);
  [self sair];
}

- (void)onSuccessDocument: (DocumentResult *)result {
  [self.acessoBioModule onSucessCamera:result.base64];
  [self.acessoBioModule onSucessCamera:result.encrypted];
  [self sair];
}

- (void)onErrorDocument:(ErrorBio *)errorBio {
  NSLog(@"onErrorDocument");
  NSLog(@"%@", errorBio.desc);
}

- (void)onErrorCameraFace:(NSString *)error {
  NSLog(@"onErrorCameraFace");
  NSLog(@"%@", error);
  [self.acessoBioModule onErrorCameraFace:error];
  [self sair];
}

- (void)onSystemChangedTypeCameraTimeoutFaceInference {
  NSLog(@"onSystemChangedTypeCameraTimeoutFaceInference");
  [self.acessoBioModule systemClosedCameraTimeoutSession];
  [self sair];
}

- (void)onSystemClosedCameraTimeoutSession {
  NSLog(@"onSystemClosedCameraTimeoutSession");
  [self.acessoBioModule systemClosedCameraTimeoutSession];
  [self sair];
}

- (void)onUserClosedCameraManually {
  NSLog(@"onUserClosedCameraManually");
  [self.acessoBioModule userClosedCameraManually];
  [self sair];
}

- (void)sair{
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 0.5 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
    [self dismissViewControllerAnimated:YES completion:nil];
  });
}

@end
