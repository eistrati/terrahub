# aws_efs_mount_target

Provides an Elastic File System (EFS) mount target.

## input variables

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
|account_id|The id of AWS account.|string||Yes|
|region|This is the AWS region.|string|us-east-1|Yes|
|efs_mount_target_file_system_id|The ID of the file system for which the mount target is intended.|string||Yes|
|efs_mount_target_subnet_id|The ID of the subnet to add the mount target in.|string||Yes|
|efs_mount_target_ip_address|The address (within the address range of the specified subnet) at which the file system may be mounted via the mount target.|string||Yes|
|efs_mount_target_security_groups|A list of up to 5 VPC security group IDs (that must be for the same VPC as subnet specified) in effect for the mount target.|list||Yes|
|custom_tags|Custom tags.|map||No|
|default_tags|Default tags.|map|{"ThubName"= "{{ name }}","ThubCode"= "{{ code }}","ThubEnv"= "default","Description" = "Managed by TerraHub"}|No|

## output parameters

| Name | Description | Type |
|------|-------------|:----:|
|id|The ID of the mount target.|string|
|thub_id|The ID of the mount target (hotfix for issue hashicorp/terraform#[7982]).|string|
|dns_name|The DNS name for the given subnet/AZ per documented convention.|string|
|network_interface_id|The ID of the network interface that Amazon EFS created when it created the mount target.|string|