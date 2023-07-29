-- Create Table
CREATE TABLE IF NOT EXISTS "Users" (
  "id" UUID NOT NULL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL,
  "phone" VARCHAR(255) NULL,
  "createdAt" TIMESTAMPTZ NOT NULL,
  "updatedAt" TIMESTAMPTZ NOT NULL
);

-- Seed
INSERT INTO "Users" (id, name, email, password, "createdAt", "updatedAt") VALUES
('35089da6-5783-4958-ae93-ff02f5a41343', 'John Doe', 'john.doe@wapi.com', '$2a$08$xPOF7X96Rbos0653pFT5HOEjMaStBPis7iAR6cl5RK.eA2UoZqr3O', NOW(), NOW()),
('5048666e-0c21-45ff-86c2-67f9e18cbdf8', 'Ashley McGregor', 'ashley.mcgregor@wapi.com', '$2a$08$Js0K/fQ7jEyjyGRnYgQb4eEo1Qwl4oRsgXcymd/1DsitA.H3fmMs.', NOW(), NOW()),
('35268590-4cf2-4b0b-9586-9eade6110fa0', 'Luke Colman', 'luke.colman@wapi.com', '$2a$08$gUtUQTMAW9YVP.ZlrES2WeTcq5FnBx4GBM5WDMJcEnq82zsPoSRu6', NOW(), NOW()),
('2dbb9770-6070-462d-be8b-c984f3dda8f8', 'Siena Minkler', 'siena.minkler@wapi.com', '$2a$08$cmGvmubRWxI16uOoUvxCa.Pa/i9AeC8cEGAZmrFAqlMKqhAHDbPzy', NOW(), NOW()),
('02bc1819-d238-4245-9de8-7e88eb96a462', 'Michael Penke', 'michael.penke@wapi.com', '$2a$08$I0RrhmLm/t5JGDz0sGyBleask4p0rYuLxIoDuDUv9Y9c84IT2PUWu', NOW(), NOW()),
('20e64fe2-81f2-4c1e-b5cd-182c5adba2b4', 'Monica Geller', 'monica.geller@wapi.com', '$2a$08$oevzC9vSI1SvhTt6n4YyUeNMYLwQU7UXNtSLCL3frcPMBpTxlXrN.', NOW(), NOW());
