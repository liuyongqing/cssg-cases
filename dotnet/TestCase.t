using COSXML.Common;
using COSXML.CosException;
using COSXML.Model;
using COSXML.Model.Object;
using COSXML.Model.Tag;
using COSXML.Model.Bucket;
using COSXML.Model.Service;
using COSXML.Utils;
using COSXML.Auth;
using COSXML.Transfer;
using NUnit.Framework;
using System;
using COSXML;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace COSSample
{
    public class {{name}}Test {

      {{#isMultiUpload}}

      string uploadId;
      string eTag;
      {{/isMultiUpload}}
      {{#defines}}

      {{{snippet}}}
      {{/defines}}
      {{#methods}}

      public void {{name}}()
      {
        {{{snippet}}}
      }   
      {{/methods}}
      {{^isGlobalInit}}

      [SetUp()]
      public void setup() {
        {{#setup}}
        {{name}}();
        {{/setup}}
      }

      [TearDown()]
      public void teardown() {
        {{#teardown}}
        {{name}}();
        {{/teardown}}
      }
      {{/isGlobalInit}}

      [Test()]
      public void test{{name}}() {
        {{#steps}}
        {{name}}();
        {{/steps}}
      }
    }
}