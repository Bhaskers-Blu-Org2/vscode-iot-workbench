// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export class PnPFileNames {
  static readonly resourcesFolderName = 'resources';
  static readonly deviceModelFolderName = 'DeviceModel';
  static readonly graphFileName = 'graph.json';
  static readonly interfaceFileName = 'Interface.json';
  static readonly templateFileName = 'Template.json';
  static readonly iotworkbenchprojectFileName = '.vscode-pnp';
  static readonly settingsJsonFileName = 'settings.json';
  static readonly vscodeSettingsFolderName = '.vscode';
  static readonly sampleInterfaceName = 'sample.interface.json';
  static readonly sampleTemplateName = 'sample.template.json';
  static readonly schemaFolderName = 'schemas';
  static readonly interfaceSchemaFileName = 'interface.schema.json';
  static readonly templateSchemaFileName = 'template.schema.json';
  static readonly defaultInterfaceName = 'myInterface.interface.json';
  static readonly defaultTemplateName = 'myTemplate.template.json';
}

export class PnPConstants {
  static readonly modelRepositoryKeyName = 'ModelRepositoryKey';
  static readonly repoConnectionStringTemplate =
      'HostName=<Host Name>;SharedAccessKeyName=<Shared AccessKey Name>;SharedAccessKey=<access Key>';
}